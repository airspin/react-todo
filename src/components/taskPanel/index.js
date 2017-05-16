import React, { Component } from 'react';
import AddTaskContainer from './addTask/AddTaskContainer';
import TaskEditorContainer from './taskEditor/TaskEditorContainer';
import TasksList from './TasksList';
import { changeTaskState,taskChangeEditmode,addNewTask,removeTask } from './actions';
import { changeActiveCatAction } from '../categoryPanel/actions/categories';
import { showModal } from '../ModalWindow/actions';
import { connect } from 'react-redux';
import { sortArrOfObj } from '../../utils/helpers';

class TaskPanel extends Component {
    removeTaskModal = (id) => {
        this.props.showModal({
            modalType:'RemoveTask',
            modalParams:{
                id,
                title: 'Remove task',
                templ: 'RemoveTask',
                confirmBtnName: 'Yes',
                cancelBtnName: 'Cancel'
            },
        })
    }
    onEditBtn= (task) => {
        this.props.changeActiveCat(task.category);
        this.props.taskChangeEditmode(task);
    }
    render() {
        const activeTask = this.props.activeTask;
        return(
            <div className="row">
                { activeTask ? null : <AddTaskContainer />}
                { activeTask ? <TaskEditorContainer
                    onCancelEdit={this.props.taskChangeEditmode}
                    onSaveEdit={this.props.addNewTask}
                    activeTask={activeTask}
                /> :
                <TasksList tasks={this.props.tasks.items}
                           onCompleteChange={this.props.changeTaskState}
                           onEditBtn={this.onEditBtn}
                           onRemoveBtn={this.removeTaskModal}
                />
                }
            </div>
        )
    }
}



const tasksSelector = (tasks) => {
    let tasksArr = Object.values(tasks.items) || [];
    let filters = tasks.filters;
    const sorter = sortArrOfObj('id','dec');
    if (filters.byActiveCat) {
        tasksArr = tasksArr.filter((obj)=>obj.category===filters.byActiveCat);
    }
    if (filters.byName) {
        tasksArr = tasksArr.filter((obj)=>~obj.name.indexOf(filters.byName))
    }
    if (filters.byComplete) {
        tasksArr = tasksArr.filter((obj)=>obj.isCompleted)
    }
    tasksArr = tasksArr.sort(sorter);
    return {
        items: tasksArr,
        filters: tasks.filters
    };
};

const mapStateToProps = (state) => {
    return {
        activeCat: state.data.present.categories.activeCat,
        activeTask: state.data.present.tasks.activeTask,
        tasks: tasksSelector(state.data.present.tasks),
    }
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            changeTaskState: (id) => dispatch(changeTaskState(id)),
            taskChangeEditmode: (task) => dispatch(taskChangeEditmode(task)),
            changeActiveCat: (id) => dispatch(changeActiveCatAction(id)),
            addNewTask: (task) => dispatch(addNewTask(task)),
            removeTask: (id) => dispatch(removeTask(id)),
            showModal: (modalData) => dispatch(showModal(modalData))
        }
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskPanel);
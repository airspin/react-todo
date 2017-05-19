import React, { Component } from 'react';
import TasksList from './TasksList';

import { changeTaskState,taskChangeEditmode,addNewTask,removeTask } from '../actions';
import { changeActiveCat } from '../../categoryPanel/actions/categories';
import { showModal } from '../../ModalWindow/actions';
import { connect } from 'react-redux';
import { sortArrOfObj } from '../../../utils/helpers';

class TasksListContainer extends Component {
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
        this.props.taskChangeEditmode(task);
        this.props.changeActiveCat(task.category);
    }
    render() {
        return (
            <TasksList
                onEditBtn={this.onEditBtn}
                onRemoveBtn={this.removeTaskModal}
                tasks={this.props.tasks.items}
                onCompleteChange={this.props.onCompleteChange}
            />
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
        tasks: tasksSelector(state.data.present.tasks),
    }
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            onCompleteChange: (id) => dispatch(changeTaskState(id)),
            taskChangeEditmode: (task) => dispatch(taskChangeEditmode(task)),
            changeActiveCat: (id) => dispatch(changeActiveCat(id)),
            addNewTask: (task) => dispatch(addNewTask(task)),
            removeTask: (id) => dispatch(removeTask(id)),
            showModal: (modalData) => dispatch(showModal(modalData)),
        }
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksListContainer);

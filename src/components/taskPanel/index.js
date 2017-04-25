import React, { Component } from 'react';
import AddTask from './AddTask';
import TasksList from './TasksList';
import { changeTaskState } from './actions/tasks';
import { connect } from 'react-redux';

class TaskPanel extends Component {
    render() {
        return(
            <div>
                <AddTask />
                <TasksList tasks={this.props.tasks.items} onCompleteChange={this.props.changeTaskState}/>
            </div>
        )
    }
}



const tasksSelector = (tasks) => {
    let tasksArr = Object.values(tasks.items) || [];
    let filters = tasks.filters;
    if (filters.byActiveCat) {
        tasksArr = tasksArr.filter((obj)=>obj.category===filters.byActiveCat);
    }
    if (filters.byName) {
        tasksArr = tasksArr.filter((obj)=>~obj.name.indexOf(filters.byName))
    }
    if (filters.byComplete) {
        tasksArr = tasksArr.filter((obj)=>obj.isCompleted)
    }
    return {
        items: tasksArr,
        filters: tasks.filters
    };
};

const mapStateToProps = (state) => {
    return {
        activeCat: state.categories.activeCat,
        tasks: tasksSelector(state.tasks),
    }
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            changeTaskState: (id) => dispatch(changeTaskState(id))
        }
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskPanel);
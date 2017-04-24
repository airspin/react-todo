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


// byActiveCat
// byName
// byComplete


const tasksSelector = (tasks) => {
    let tasksArr = Object.values(tasks.items) || [];
    let filter = tasks.filter;
    if (filter.byActiveCat) {
        tasksArr = tasksArr.filter((obj)=>obj.category==filter.byActiveCat)
    }
    if (filter.byName) {
        tasksArr = tasksArr.filter((obj)=>obj.name==filter.byName)
    }
    if (filter.byComplete) {
        tasksArr = tasksArr.filter((obj)=>obj.isCompleted)
    }
    return {
        items: tasksArr,
        filter: tasks.filter
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
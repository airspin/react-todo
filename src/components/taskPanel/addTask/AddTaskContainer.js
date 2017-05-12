import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../actions'
import AddTask from './AddTask'


class AddTaskContainer extends Component {
    addTask = (name,cat)=>{
        let task = {
            name: name,
            id: Date.now(),
            category: cat,
            isCompleted: false
        };
        this.props.addNewTask(task);
    }

    render(){
        const activeCat = this.props.activeCat;
        return (
            <AddTask activeCat={activeCat} addTask={this.addTask}/>
        )
    }
}

const mapStateToProps = (state) => ({
    activeCat: state.data.present.categories.activeCat
});

const mapDispatchToProps = (dispatch) => ({
    addNewTask: (task) => dispatch(addNewTask(task))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddTaskContainer);
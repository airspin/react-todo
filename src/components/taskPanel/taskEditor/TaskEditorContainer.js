import React, { Component } from 'react';
import TaskEditor from './TaskEditor'
import { connect } from 'react-redux';
import { sendActiveTaskId, addNewTask, taskChangeEditmode } from '../actions';

class TaskEditorContainer extends Component {
    componentDidMount(){
        const taskId = this.props.params.id+'';
        console.log('TASKID:',taskId);
        if (!this.props.activeTask && taskId) {
            console.log('ЗАПУСКАЙ');
            this.props.sendActiveTaskId(taskId);
        }
    }
    render(){
        const { activeTask,taskChangeEditmode,SaveTask } = this.props;
        return(
            <div>
                {
                    activeTask ? !activeTask.notFound ?
                    <TaskEditor activeTask={activeTask}
                                onCancelEdit={taskChangeEditmode}
                                onSaveEdit={SaveTask}
                    /> :
                        <h2>Task not found</h2> :
                        <h2>Loading task</h2>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        activeCat: state.data.present.categories.activeCat,
        activeTask: state.data.present.tasks.activeTask,
        rawTasks: state.data.present.tasks.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            sendActiveTaskId: (taskId) => dispatch(sendActiveTaskId(taskId)),
            SaveTask: (task) => dispatch(addNewTask(task)),
            taskChangeEditmode: (task) => dispatch(taskChangeEditmode(task))
        }
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskEditorContainer);
import React, { Component } from 'react';
import TaskEditor from './TaskEditor'


class TaskEditorContainer extends Component {
    render(){
        return(
            <TaskEditor activeTask={this.props.activeTask}
                        onCacelEdit={this.props.onCancelEdit}
                        onSaveEdit={this.props.onSaveEdit}
            />
        )
    }
}

export default TaskEditorContainer;
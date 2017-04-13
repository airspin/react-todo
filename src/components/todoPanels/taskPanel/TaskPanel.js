import React, { Component } from 'react';
import AddTask from './AddTask';

class TaskPanel extends Component {
    render() {
        return(
            <div className="col-md-8">
                <AddTask />
            </div>
        )
    }
}

export default TaskPanel;
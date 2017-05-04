import React, { Component } from 'react';

import './css/index.css';


class TasksList extends Component {

    render() {
        const tasks = this.props.tasks;
        return (
            <div className="col-md-12">
                <ul className="pure-list tasks-list fixed-height">
                    { tasks.map((task) =>
                        <li key={task.id}>
                            <div className="checkbox task-title">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={task.isCompleted}
                                        onClick={()=>this.props.onCompleteChange(task.id)}
                                    />
                                    {task.name}
                                </label>
                            </div>
                            <span className="task-btn btn-edit-task" onClick={()=>this.props.onEditBtn(task)}>
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </span>
                            <span className="task-btn btn-remove-task" onClick={()=>this.props.onRemoveBtn(task.id)}>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default TasksList;
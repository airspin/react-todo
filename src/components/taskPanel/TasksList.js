import React, { Component } from 'react';
import { changeActiveTask } from './actions/tasks';


class TasksList extends Component {

    render() {
        const tasks = this.props.tasks;
        const cahangeCompleteState = (id) => {

        };
        return (
            <div className="row">
                <ul className="pure-list">
                    { tasks.map((task) =>
                        <li key={task.id}>
                            <div>
                                <div className="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={task.isCompleted}
                                            onClick={()=>this.props.onCompleteChange(task.id)}
                                        />
                                        {task.name}
                                    </label>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default TasksList;
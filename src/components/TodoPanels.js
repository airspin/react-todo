import React, { Component } from 'react';
import CategoryPanel from './todoPanels/categoryPanel/CategoryPanel';
import TaskPanel from './todoPanels/taskPanel/TaskPanel';

class TodoPanels extends Component {
    render() {
        const { categories }  = this.props;
        return(
            <div className="row">
                <CategoryPanel categories={categories}/>
                <TaskPanel />
            </div>
        )
    }
}

export default TodoPanels;
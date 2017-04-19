import React, { Component } from 'react';
import CategoryPanel from './categoryPanel/CategoryPanel';
import TaskPanel from './taskPanel/TaskPanel';

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
import React, { Component } from 'react';

class TaskPanel extends Component {
    render() {
        return(
            <div className="row">
                {this.props.children && React.cloneElement(this.props.children)}
            </div>
        )
    }
}

export default TaskPanel;
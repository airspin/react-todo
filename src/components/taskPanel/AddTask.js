import React, { Component } from 'react';
import AddItem from '../AddItem';

class AddTask extends Component {
    render() {
        const placeholder='Enter task';
        const btnName = 'Add';
        return(
            <AddItem
                placeholder={placeholder}
                btnName={btnName}
            />
        )
    }
}

export default AddTask;
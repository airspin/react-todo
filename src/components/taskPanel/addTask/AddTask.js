import React, { Component } from 'react';
import AddItem from '../../AddItem';

class AddTask extends Component {
    render() {
        const placeholder='Enter task';
        const btnName = 'Add';
        const activeCat = this.props.activeCat;
        const btnAction = this.props.addTask;
        return(
            <div className="col-md-12">
                {activeCat &&
                    <AddItem
                        placeholder={placeholder}
                        btnName={btnName}
                        btnAction={btnAction}
                        activeCat={activeCat}
                    />
                }
            </div>
        )
    }
}


export default AddTask;
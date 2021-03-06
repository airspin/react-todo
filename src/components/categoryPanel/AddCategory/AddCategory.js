import React, { Component } from 'react';
import AddItem from '../../AddItem';


class AddCategory extends Component {
    render() {
        const placeholder='Enter category';
        const btnName = 'Add';
        const btnAction = this.props.btnAction;
        return(
            <div className="row">
                <div className="col-md-12">
                    <AddItem
                        placeholder={placeholder}
                        btnName={btnName}
                        btnAction={btnAction}
                    />
                </div>
            </div>
        )
    }
}

export default AddCategory;
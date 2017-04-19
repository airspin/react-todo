import React, { Component } from 'react';
import AddCategory from '../AddItem';
import CategoryList from './CategoryList';





class CategoryPanel extends Component {
    render() {
        const placeholder='Enter category title';
        const btnName = 'Add';
        return(
            <div>
                <AddCategory
                    placeholder={placeholder}
                    btnName={btnName}
                />
                <CategoryList categories={this.props.categories} />
            </div>
        )
    }
}

export default CategoryPanel;
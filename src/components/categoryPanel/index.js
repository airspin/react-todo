import React, { Component } from 'react';
import AddCategoryContainer from './AddCategory/AddCategoryContainer';
import CategoryList from './CategoryList';



class CategoryPanel extends Component {
    render() {
        const placeholder='Enter category title';
        const btnName = 'Add';
        return(
            <div>
                <AddCategoryContainer
                    placeholder={placeholder}
                    btnName={btnName}
                />
                <CategoryList categories={this.props.categories} />
            </div>
        )
    }
}

export default CategoryPanel;
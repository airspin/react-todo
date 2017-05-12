import React, { Component } from 'react';
import AddCategory from './AddCategory';
import { connect } from 'react-redux'
import { addNewCategoryItem } from '../actions/categories'

class AddCategoryContainer extends Component {
    addCategory = (name)=>{
        let cat = {
            name: name,
            id: Date.now(),
            parent: null
        };
        this.props.addNewCategory(cat);
    }
    render(){
        const btnAction = this.addCategory;
        return(
            <AddCategory btnAction={btnAction}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addNewCategory: (category) => dispatch(addNewCategoryItem(category))
});


export default connect(null,mapDispatchToProps)(AddCategoryContainer);
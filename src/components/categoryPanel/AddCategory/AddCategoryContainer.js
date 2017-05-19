import React, { Component } from 'react';
import AddCategory from './AddCategory';
import { connect } from 'react-redux'
import { addNewCategoryItem } from '../actions/categories'
import '../style.css'
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
        const { activeTask } = this.props;
        return(
            <div className={activeTask ? 'editor-mode' : ''}>
                {!activeTask &&
                <AddCategory btnAction={btnAction}/>
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    activeTask: state.data.present.tasks.activeTask
})

const mapDispatchToProps = (dispatch) => ({
    addNewCategory: (category) => dispatch(addNewCategoryItem(category))
});


export default connect(mapStateToProps,mapDispatchToProps)(AddCategoryContainer);
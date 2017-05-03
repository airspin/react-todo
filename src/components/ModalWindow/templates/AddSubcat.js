import React, { Component } from 'react';
// import { connect, connectAdvanced } from 'react-redux';
// import { changeActiveCatAction, removeCategory, addNewCategoryItem } from '../../categoryPanel/actions/categories';
// import { hideModal, showModal } from '../../ModalWindow/actions';

import { connectAdvanced } from 'react-redux';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { addNewCategoryItem } from '../../categoryPanel/actions/categories';
import { hideModal } from '../../ModalWindow/actions';

class AddSubcat extends Component{
    constructor(props){
        super(props);
        this.state={
            inputText:'',
        }
    }


    changeInputText = (e)=>{
        const val = e.target.value;
        this.setState({
            inputText:val
        })
    };

    onConfirmBtn() {
        let cat = {
            name: this.state.inputText,
            id: Date.now(),
            parent: this.props.params.id
        };
        if(cat.name) {
            this.props.addNewCategory(cat);
            this.props.hideModal();
        }
    }
    render(){
        return(
            <input value={this.state.inputText}
                   className="form-control"
                   onChange={this.changeInputText}
            />

        )
    }
}


// const mapStateToProps = (state) => ({
//
// });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addNewCategory: (category) => dispatch(addNewCategoryItem(category)),
//         hideModal: () => dispatch(hideModal())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps,null, { withRef: true, getDisplayName: (name)=>name })(addSubcat)

const selectorFactory = (dispatch) => {
    const actions = {
        addNewCategory: (category) => dispatch(addNewCategoryItem(category)),
        hideModal: () => dispatch(hideModal())
    };

    let result = {};

    return (nextState, nextOwnProps) => {
        const nextStateProps = {};
        const nextResult = {...actions, ...nextOwnProps, ...nextStateProps};
        if(!shallowEqual(result, nextResult)) {
            // console.log('!!!!!Oh main god result changed!!!');
            result = nextResult;
        }
        return result;
    }
};

export default connectAdvanced(selectorFactory, { withRef: true, getDisplayName: (name)=>name })(AddSubcat);
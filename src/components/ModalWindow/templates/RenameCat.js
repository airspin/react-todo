import React, { Component } from 'react';
import { connectAdvanced } from 'react-redux';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { renameCategory } from '../../categoryPanel/actions/categories';
import { hideModal } from '../../ModalWindow/actions';

class RenameCat extends Component{
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
        if(this.state.inputText) {
            this.props.renameCategory(this.props.params.id,this.state.inputText);
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


const selectorFactory = (dispatch) => {
    const actions = {
        renameCategory: (id,newName) => dispatch(renameCategory(id,newName)),
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

export default connectAdvanced(selectorFactory, { withRef: true, getDisplayName: (name)=>name })(RenameCat);
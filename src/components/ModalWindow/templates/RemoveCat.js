import React, { Component } from 'react';
import { connectAdvanced } from 'react-redux';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { removeCategory } from '../../categoryPanel/actions/categories';
import { hideModal } from '../../ModalWindow/actions';

class RemoveCat extends Component{
    onConfirmBtn() {
        this.props.removeCategory(this.props.params.id);
        this.props.hideModal();
    }
    render(){
        return <h3>
            Are you shure you want to remove this category and all nested categories and tasks?
        </h3>
    }
}


const selectorFactory = (dispatch) => {
    const actions = {
        removeCategory: (id) => dispatch(removeCategory(id)),
        hideModal: () => dispatch(hideModal())
    };

    let result = {};

    return (nextState, nextOwnProps) => {
        const nextStateProps = {};
        const nextResult = {...actions, ...nextOwnProps, ...nextStateProps};
        if(!shallowEqual(result, nextResult)) {
            result = nextResult;
        }
        return result;
    }
};

export default connectAdvanced(selectorFactory, { withRef: true, getDisplayName: (name)=>name })(RemoveCat);
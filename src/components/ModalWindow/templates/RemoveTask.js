import React, { Component } from 'react';
import { connectAdvanced } from 'react-redux';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { removeTask } from '../../taskPanel/actions';
import { hideModal } from '../../ModalWindow/actions';

class RemoveTask extends Component{
    onConfirmBtn() {
        this.props.removeTask(this.props.params.id);
        this.props.hideModal();
    }
    render(){
        return <h3>
            Are you shure you want to remove this task?
        </h3>
    }
}


const selectorFactory = (dispatch) => {
    const actions = {
        removeTask: (id) => dispatch(removeTask(id)),
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

export default connectAdvanced(selectorFactory, { withRef: true, getDisplayName: (name)=>name })(RemoveTask);
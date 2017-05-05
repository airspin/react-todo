import React, { Component } from 'react';
import { connectAdvanced } from 'react-redux';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { removeTask, addNewTask } from '../../taskPanel/actions';
import { hideModal } from '../../ModalWindow/actions';

class MoveToCat extends Component{
    onConfirmBtn() {
        this.props.removeCategory(this.props.params.id);
        this.props.hideModal();
    }
    onMiddleBtn() {

    }
    render(){
        return (
            <div>
                <h4>
                    Are you shure you want to move this this task in category: "{this.props.params.newCatName}"?
                </h4>
            </div>
        )
    }
}


const selectorFactory = (dispatch) => {
    const actions = {
        removeTask: (id) => dispatch(removeTask(id)),
        addNewTask: (task) => dispatch(addNewTask(task)),
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

export default connectAdvanced(selectorFactory, { withRef: true, getDisplayName: (name)=>name })(MoveToCat);
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as Templ from './templates';

const templ = {
    'AddSubcat': Templ.AddSubcat,
    'RenameCat': Templ.RenameCat,
    'RemoveTask': Templ.RemoveTask,
    'RemoveCat': Templ.RemoveCat,
    'MoveToCat': Templ.MoveToCat,
};

console.log('TEMPLATE:',Templ);

class ModalWindow extends Component {

    onConfirmBtnClick = () => {
        const connectedComponent = this.containedComponent.getWrappedInstance();

        if(typeof connectedComponent.onConfirmBtn === 'function' ) {
            connectedComponent.onConfirmBtn();
        } else {
            console.warn(`Component ${this.containedComponent.displayName} hasn't required method onConfirmBtn`);
        }
    }

    onCancelBtnClick = () => {
        const connectedComponent = this.containedComponent.getWrappedInstance();

        if(typeof connectedComponent.props.hideModal === 'function' ) {
            connectedComponent.props.hideModal()
        } else {
            console.warn(`Component ${this.containedComponent.displayName} hasn't required method onCancelBtn`);
        }
    }

    render(){
        const params = this.props.modalParams;
        const modalType = this.props.modalType;
        const Content = templ[modalType];
        console.log(templ);
        return(
            <Modal show={!!this.props.modalType} onHide={this.onCancelBtnClick}>
                <Modal.Header closeButton>
                    <Modal.Title>{params.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Content ref={comp => { this.containedComponent = comp; } } params={params}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.onCancelBtnClick} >{params.cancelBtnName}</Button>
                    {params.middleBtnName &&
                        <Button bsStyle="info" onClick={() => this.onConfirmBtnClick()} >{params.middleBtnName}</Button>
                    }
                    <Button bsStyle="success" onClick={() => this.onConfirmBtnClick()} >{params.confirmBtnName}</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalWindow;
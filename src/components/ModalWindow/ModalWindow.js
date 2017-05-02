import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

class ModalWindow extends Component {
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
    }
    render(){
        const inputText = this.state.inputText;
        return(
            <Modal show={!!this.props.modalType} onHide={this.props.onCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>New subcategory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={this.state.inputText}
                           className="form-control"
                           onChange={this.changeInputText}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.props.onCancel}>Cancel</Button>
                    <Button bsStyle="success" onClick={() => this.props.onSave(inputText)}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalWindow;
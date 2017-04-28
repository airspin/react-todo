import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

class modalWindow extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal: false,
            subcatName:'',
        }
    }
    close = () => {
        this.setState({ showModal: false });
    }
    render(){
        return(
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>New subcategory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={this.state.subcatName}
                           className="form-control"
                           onChange={this.filterByName}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.close}>Cancel</Button>
                    <Button bsStyle="success" onClick={this.close}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default modalWindow;
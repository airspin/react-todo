import React, { Component } from 'react';
import {  Row, Col, ProgressBar } from 'react-bootstrap';
class ProgrBar extends Component {
    render() {
        return(
            <Row className="show-grid">
                <Col md={12}>
                    <ProgressBar now={5} />
                </Col>
            </Row>
        )
    }
}

export default ProgrBar;
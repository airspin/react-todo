/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, FormControl, FormGroup, InputGroup, Glyphicon, Checkbox, ControlLabel } from 'react-bootstrap';


class ListPageHeader extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={3} className="text-left">
                    <h2>
                        ToDo-List
                    </h2>
                </Col>
                <Col md={9} className="text-right">
                    <FormGroup className="marg-top-md">
                        <Checkbox inline className="padd-right-md">
                            Show Done
                        </Checkbox>
                        <div className="btn-group">
                            <input id="searchinput" type="search" className="form-control" />
                            <span id="searchclear" className="glyphicon glyphicon-remove-circle"></span>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
        )
    }
}

export default ListPageHeader;


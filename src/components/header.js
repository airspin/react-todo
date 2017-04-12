/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, FormControl, FormGroup, InputGroup, Glyphicon, Checkbox, ControlLabel } from 'react-bootstrap';


class ListPageHeader extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3} className="text-left">
                            <h2>
                                ToDo-List
                            </h2>
                        </Col>
                        <Col md={3}>
                            <Checkbox inline>
                                1
                            </Checkbox>
                        </Col>
                        <Col md={9}>
                            <FormGroup>
                                <Checkbox inline>
                                    1
                                </Checkbox>
                                <InputGroup>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter name"
                                    />
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="remove-circle" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default ListPageHeader;


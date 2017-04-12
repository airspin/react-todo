/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, FormControl } from 'react-bootstrap';


class ListPageHeader extends Component {
    render() {
        return (
            <div>
                <PageHeader>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={3} className="text-left">ToDo-List</Col>
                            <Col md={9}>
                                <Col className="pull-right">
                                    <FormControl
                                        type="text"
                                        // value={this.state.value}
                                        placeholder="Enter text"
                                        // onChange={this.handleChange}
                                    />
                                </Col>
                            </Col>
                        </Row>
                    </Grid>
                </PageHeader>
                <Button bsStyle="primary">Primary</Button>
                <p>TODO 10</p>
            </div>
        )
    }
}

export default ListPageHeader;


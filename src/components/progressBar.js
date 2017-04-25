import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Row, Col, ProgressBar } from 'react-bootstrap';
class ProgrBar extends Component {
    render() {
        const activeCat = this.props.activeCat;
        var currentCatItems;
        var completedItemsLength;
        var currentCatLength;
        if (activeCat) {
            currentCatItems = Object.values(this.props.tasks).filter((obj)=>obj.category===activeCat);
            currentCatLength = currentCatItems.length;
        } else {
            currentCatItems = Object.values(this.props.tasks);
            currentCatLength = currentCatItems.length;
        }
        completedItemsLength = currentCatItems.filter((obj)=>obj.isCompleted===true).length;
        const progrBarVal = completedItemsLength*100/currentCatLength;
        return(
            <Row className="show-grid">
                <Col md={12}>
                    <ProgressBar now={progrBarVal} />
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state)=> ({
    tasks: state.tasks.items,
    activeCat: state.categories.activeCat
})

export default connect(mapStateToProps)(ProgrBar);
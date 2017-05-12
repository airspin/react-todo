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
        const progrBarVal = currentCatLength ? completedItemsLength*100/currentCatLength : 0;
        return(
            <Row className="show-grid">
                <Col md={12}>
                    <ProgressBar
                        bsStyle={
                            progrBarVal <= 30 ? 'danger' :
                            progrBarVal <= 60 ? 'warning' :
                            progrBarVal < 100 ? 'info' : 'success'
                        }
                        now={progrBarVal}
                    />
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state)=> ({
    tasks: state.data.present.tasks.items,
    activeCat: state.data.present.categories.activeCat
});

export default connect(mapStateToProps)(ProgrBar);
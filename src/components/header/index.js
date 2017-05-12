/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, FormControl, FormGroup, InputGroup, Glyphicon, Checkbox, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeFilterByComplete, changeFilterByName } from './actions';
import { ActionCreators } from 'redux-undo';
import './style/style.css';
function debounce(f, ms) {

    let timeout = null;

    return function() {
        var args = arguments;

        if(timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        timeout = setTimeout(function () {
            f.apply(this, args);
            timeout = null;
        }, ms);
    }
};

class ListPageHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterByName: ''
        }
        this.debouncedFilter = debounce(this.props.changeFilterByName, 200);
    }

    filterByName = (e) => {
        const val = e.target.value;
        this.setState({filterByName:val}, () => {
            this.debouncedFilter(val);
        });
    }

    clearFilter = () => {
        this.setState({
            filterByName: ''
        },this.props.changeFilterByName)
    }

    onStoreUndo = () => {
        if (this.props.canUndo) {
            this.props.storeUndo();
        } else {
            console.info('can\'t undo')
        }
    }

    onStoreRedo = () => {
        if (this.props.canRedo) {
            this.props.storeRedo();
        } else {
            console.info('can\'t redo')
        }
    }

    render() {
        const {canUndo, canRedo} = this.props;
        return (
            <Row className="show-grid">
                <Col md={3} className="text-left">
                    <h2>
                        ToDo-List
                    </h2>
                </Col>
                <Col md={9} className="text-right">
                    <Col md={7} className="undoRedo">
                        <span className={"padd-right-sm item " + (canUndo ? 'text-primary' : '')} onClick={this.onStoreUndo}>
                            <i className="fa fa-undo" aria-hidden="true"></i>
                        </span>
                        <span className={"item " + (canRedo ? 'text-primary' : '')} onClick={this.onStoreRedo}>
                            <i className="fa fa-undo fa-flip-horizontal" aria-hidden="true"></i>
                        </span>
                    </Col>
                    <Col md={5}>
                        <FormGroup className="marg-top-md">
                            <Checkbox inline onChange={this.props.changeFilterByComplete} className="padd-right-md">
                                Show Done
                            </Checkbox>
                            <div className="btn-group">
                                <input id="searchinput" value={this.state.filterByName} type="search"
                                       className="form-control"
                                       onChange={this.filterByName}
                                />
                                <span id="searchclear" className="glyphicon glyphicon-remove-circle" onClick={this.clearFilter}></span>
                            </div>
                        </FormGroup>
                    </Col>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.data.present.tasks.filters,
    canUndo: !!state.data.past.length,
    canRedo: !!state.data.future.length
});

const mapDispatchToProps = (dispatch) => ({
    changeFilterByComplete: () => dispatch(changeFilterByComplete()),
    changeFilterByName: (name='') => dispatch(changeFilterByName(name)),
    storeUndo: () => dispatch(ActionCreators.undo()),
    storeRedo: () => dispatch(ActionCreators.redo())
});



export default connect(mapStateToProps,mapDispatchToProps)(ListPageHeader);


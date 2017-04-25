/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, FormControl, FormGroup, InputGroup, Glyphicon, Checkbox, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeFilterByComplete, changeFilterByName } from './actions'

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
        this.setState({filterByName:val}, () =>{
            this.debouncedFilter(val);
        });
    }

    clearFiletr = () => {
        this.setState({
            filterByName: ''
        },this.props.changeFilterByName)
    }

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
                        <Checkbox inline onChange={this.props.changeFilterByComplete} className="padd-right-md">
                            Show Done
                        </Checkbox>
                        <div className="btn-group">
                            <input id="searchinput" value={this.state.filterByName} type="search"
                                   className="form-control"
                                   onChange={this.filterByName}
                            />
                            <span id="searchclear" className="glyphicon glyphicon-remove-circle" onClick={this.clearFiletr}></span>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.tasks.filters
});

const mapDispatchToProps = (dispatch) => ({
    changeFilterByComplete: () => dispatch(changeFilterByComplete()),
    changeFilterByName: (name='') => dispatch(changeFilterByName(name))
});



export default connect(mapStateToProps,mapDispatchToProps)(ListPageHeader);


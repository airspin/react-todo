/* eslint-disable */
import React, { Component } from 'react';
import { PageHeader, Button, Grid, Row, Col, FormControl, FormGroup, InputGroup, Glyphicon, Checkbox, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { changeFilterByComplete, changeFilterByName } from './actions';
import { loadInitialState } from '../../actions/app';
import { changeActiveCat } from '../categoryPanel/actions/categories';
import { taskChangeEditmode } from '../taskPanel/actions';
import { ActionCreators } from 'redux-undo';
import './style/style.css';
function debounce(f, ms) {

    let timeout = null;

    return function() {
        var args = arguments;
        console.log(args);

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
            filterByName: '',
            filterByComplete: false
        }
        this.debouncedNameFilter = debounce(this.props.filterByName, 200);
        this.debouncedCompleteFilter = debounce(this.props.filterByComplete, 150);
    }

    onNameChange = ({target: { value }}) =>  {
        this.setState({filterByName: value}, () => {
            this.debouncedNameFilter(value);
        });
    };

    onCompleteChange = ({target: {checked}}) =>  {
        this.setState({filterByComplete: checked}, () => {
            this.debouncedCompleteFilter(checked);
        });
    };



    clearFilter = () => {
        this.setState({
            filterByName: ''
        },this.props.filterByName)
    }

    onStoreUndo = () => {
        if (this.props.canUndo) {
            this.props.storeUndo();
            this.props.taskChangeEditmode(null);
        } else {
            console.info('can\'t undo')
        }
    }

    onStoreRedo = () => {
        if (this.props.canRedo) {
            this.props.storeRedo();
            this.props.taskChangeEditmode(null);
        } else {
            console.info('can\'t redo')
        }
    }
    onLogoClick = () => {
        this.props.taskChangeEditmode(null);
        this.props.loadInitialState();
    }
    componentWillMount() {
        const filterByComplete = this.props.location.query.filterByComplete === 'true' ? true : false;
        console.log('FILTER COMPLETE:',filterByComplete);
        const filterByName = this.props.location.query.filterByName;
        const activeCat = +this.props.location.query.activeCat;
        if (activeCat) {
            this.props.filterByCat(activeCat)
        }
        if (filterByName) {
            this.props.filterByName(filterByName);
            this.setState({filterByName: filterByName})
        }
        if (filterByComplete) {
            this.setState({filterByComplete: filterByComplete})
        }
    }
    render() {
        const {canUndo, canRedo, activeTask} = this.props;
        return (
            <Row className="show-grid">
                <Col md={3} className="text-left">
                    <h2>
                        <Link to="/tasks" className="todo-logo" style={{'textDecoration': 'none'}} onClick={this.onLogoClick}>ToDo-List</Link>
                    </h2>
                </Col>
                {!activeTask &&
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
                                <Checkbox inline onChange={this.onCompleteChange}
                                          checked={this.state.filterByComplete}
                                          className="padd-right-md"
                                >
                                    Show Done
                                </Checkbox>
                                <div className="btn-group">
                                    <input id="searchinput" value={this.state.filterByName} type="search"
                                           className="form-control"
                                           onChange={this.onNameChange}
                                    />
                                    {this.state.filterByName &&
                                        <span id="searchclear" className="glyphicon glyphicon-remove-circle" onClick={this.clearFilter}></span>
                                    }
                                </div>
                            </FormGroup>
                        </Col>
                    </Col>
                }
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.data.present.tasks.filters,
    canUndo: !!state.data.past.length,
    canRedo: !!state.data.future.length,
    activeTask: state.data.present.tasks.activeTask
});

const mapDispatchToProps = (dispatch) => ({
    filterByComplete: (status) => dispatch(changeFilterByComplete(status)),
    filterByName: (name='') => dispatch(changeFilterByName(name)),
    filterByCat: (id) => dispatch(changeActiveCat(id)),
    storeUndo: () => dispatch(ActionCreators.undo()),
    storeRedo: () => dispatch(ActionCreators.redo()),
    taskChangeEditmode: (task) => dispatch(taskChangeEditmode(task)),
    loadInitialState: () => dispatch(loadInitialState())
});



export default connect(mapStateToProps,mapDispatchToProps)(ListPageHeader);


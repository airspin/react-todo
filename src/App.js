import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListPageHeader from './components/header'
import ProgrBar from './components/progressBar';
import TaskPanel from './components/taskPanel';
import CategoryPanel from './components/categoryPanel';
import '../src/css/fontawesome/css/font-awesome.min.css';
import ModalWindowContainer from "./components/ModalWindow/ModalWindowContainer";

class App extends Component {
    render() {
        console.log('params: ',this.props.params);
        const { isInited } = this.props;
        if( !isInited ) {
            return <h3>I am loading...</h3>
        }
        return (
            <div className="container">
                <ListPageHeader location={this.props.location} />
                <ProgrBar />
                <div className="row">
                    <div className="col-md-4">
                        <CategoryPanel location={this.props.location}/>
                    </div>
                    <div className="col-md-8">
                        <TaskPanel location={this.props.location}/>
                    </div>
                </div>
                <ModalWindowContainer/>
            </div>
        );
    }
}

const mapStateToProps = ({inited}) => ({
    isInited: inited
});



export default connect(mapStateToProps)(App);
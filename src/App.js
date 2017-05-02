import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListPageHeader from './components/header/index'
import ProgrBar from './components/progressBar';
import TaskPanel from './components/taskPanel';
import CategoryPanel from './components/categoryPanel';
import '../src/css/fontawesome/css/font-awesome.min.css';
import ModalWindowContainer from "./components/ModalWindow/ModalWindowContainer";

class App extends Component {

    render() {
        const { isInited } = this.props;
        if( !isInited ) {
            return <h3>I am loading...</h3>
        }

        return (
            <div className="container">
                <ListPageHeader />
                <ProgrBar />
                <div className="row">
                    <div className="col-md-4">
                        <CategoryPanel/>
                    </div>
                    <div className="col-md-8">
                        <TaskPanel />
                    </div>
                </div>
                <ModalWindowContainer/>
            </div>
        );
    }
}

const mapStateToProps = ({inited}) => ({
    isInited: inited
})

export default connect(mapStateToProps)(App);
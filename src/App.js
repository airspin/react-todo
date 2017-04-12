/* eslint-disable */
import React, { Component } from 'react';
import ListPageHeader from './components/header'
import ProgrBar from './components/progressBar';

class App extends Component {
    render() {
        return (<div>
                <ListPageHeader />
                <ProgrBar />
            </div>
        );
    }
}

export default App;

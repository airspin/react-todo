import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';


const store = createStore(reducer,)

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);

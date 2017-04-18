import React from 'react';
import ReactDOM from 'react-dom';
//
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducers';
import './index.css';


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// ReactDOM.render(
//     <App />,
//
//     document.getElementById('root')
// );

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

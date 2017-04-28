import React from 'react';
import ReactDOM from 'react-dom';
//
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { loadInitialState } from './actions/app';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { removeCategory } from './middlewares/removeCategory';
import App from './App';
import reducer from './reducers';
import './index.css';

const middleware = [thunk, removeCategory];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);
//const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, removeCategory)));
store.dispatch(loadInitialState());
// ReactDOM.render(
//     <App />,
//
//     document.getElementById('root')
// );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { loadInitialState } from './actions/app';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { removeCategory } from './middlewares/removeCategory';
import { filters } from './middlewares/filters';
import App from './App';
import reducer from './reducers';
import './index.css';

const middleware = [thunk, removeCategory, filters];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);
store.dispatch(loadInitialState());
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRedirect to="/tasks" />
            </Route>
            <Route path="/tasks" component={App} >
                <IndexRoute component={App} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

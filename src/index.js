import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { loadInitialState } from './actions/app';
import TaskEditorContainer from './components/taskPanel/taskEditor/TaskEditorContainer';
import TaskPanel from './components/taskPanel';
import TasksListContainer from './components/taskPanel/TasksList/TasksListContainer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { removeCategory } from './middlewares/removeCategory';
import { filters } from './middlewares/filters';
import App from './App';
import reducer from './reducers';
import './index.css';

const middleware = [thunk, filters ,removeCategory];
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
            <Route path="/" component={App}>
                <IndexRedirect to="/tasks" />
                <Route path="/tasks" component={TaskPanel}>
                    <IndexRoute component={TasksListContainer}/>
                </Route>
                <Route path="/task" component={TaskPanel}>
                    <IndexRedirect to="/tasks" />
                    <Route path="/task/:id" component={TaskEditorContainer}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

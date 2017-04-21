import React from 'react';
import ReactDOM from 'react-dom';
//
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadInitialState } from './actions/app';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducers';
import './index.css';


const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(loadInitialState());
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

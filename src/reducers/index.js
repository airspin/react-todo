import  { combineReducers } from 'redux';
//import data from './data';
import categories from './categories';
import inited from './app';

export default combineReducers({
    categories,
    inited
});
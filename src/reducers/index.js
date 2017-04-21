import  { combineReducers } from 'redux';
//import data from './data';
import categories from './categories';
import tasks from './tasks'
import inited from './app';

export default combineReducers({
    categories,
    tasks,
    inited
});
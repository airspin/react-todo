import  { combineReducers } from 'redux';
import categories from './categories';
import tasks from '../components/taskPanel/reducers/tasks'
import inited from './app';

export default combineReducers({
    categories,
    tasks,
    inited
});
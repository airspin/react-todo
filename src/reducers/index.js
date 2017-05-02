import  { combineReducers } from 'redux';
import categories from '../components/categoryPanel/reducers/categories';
import tasks from '../components/taskPanel/reducers/tasks';
import modalWindows from '../components/ModalWindow/reducers';
import inited from './app';

export default combineReducers({
    modalWindows,
    categories,
    tasks,
    inited
});
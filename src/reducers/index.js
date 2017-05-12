import  { combineReducers } from 'redux';
import undoable, { excludeAction } from 'redux-undo';

import categories from '../components/categoryPanel/reducers/categories';
import tasks from '../components/taskPanel/reducers/tasks';
import modalWindows from '../components/ModalWindow/reducers';
import inited from './app';

const data = combineReducers({categories,tasks});

export default combineReducers({
    modalWindows,
    data: undoable(data,{
        filter: excludeAction(['CHANGE_TASK_STATE','LOAD_TASKS_SUCCESS','TASK_CHANGE_EDITMODE','CHANGE_ACTIVE_CAT'])
    }),
    inited
});


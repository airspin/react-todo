import {changeActiveCat} from '../../categoryPanel/actions/categories'
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const TASK_CHANGE_EDITMODE = 'TASK_CHANGE_EDITMODE';
export const CHANGE_TASK_STATE = 'CHANGE_TASK_STATE';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const TASK_REMOVE_BY_CATEGORY = 'TRBC';
export const TASK_REMOVE = 'TASK_REMOVE';
export const TASK_MOVE_TO_CAT = 'TASK_MOVE_TO_CAT';

export const loadTasksSuccess = (tasks) => ({type: LOAD_TASKS_SUCCESS,payload: { tasks }});

export const taskChangeEditmode = (task) => ({type: TASK_CHANGE_EDITMODE,payload: task});

export const changeTaskState = (id) => ({type: CHANGE_TASK_STATE,payload: id});

export const addNewTask = (task) => ({type: ADD_NEW_TASK, payload: task});

export const removeTask = (id) => ({type: TASK_REMOVE, payload: id});

export const moveTaskToCat = (id) => ({type: TASK_MOVE_TO_CAT, payload: id});

export const sendActiveTaskId = (taskId) => (dispatch,getState) => {
    const store = getState();
    const tasks = store.data.present ? store.data.present.tasks.items : {};
    const activeTask = tasks[taskId] || {notFound:true};
    dispatch(taskChangeEditmode(activeTask));
    if (activeTask) {
        dispatch(changeActiveCat(activeTask.category))
    }
};


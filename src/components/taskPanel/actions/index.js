export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const TASK_CHANGE_EDITMODE = 'TASK_CHANGE_EDITMODE';
export const CHANGE_TASK_STATE = 'CHANGE_TASK_STATE';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const TASK_REMOVE_BY_CATEGORY = 'TRBC';
export const TASK_REMOVE = 'TASK_REMOVE';

export const loadTasksSuccess = (tasks) => ({type: LOAD_TASKS_SUCCESS,payload: { tasks }});
export const taskChangeEditmode = (task) => ({type: TASK_CHANGE_EDITMODE,payload: task});
export const changeTaskState = (id) => ({type: CHANGE_TASK_STATE,payload: id});
export const addNewTask = (task) => ({type: ADD_NEW_TASK, payload: task});
export const removeTask = (id) => ({type: TASK_REMOVE, payload: id});

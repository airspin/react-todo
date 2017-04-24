export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const CHANGE_ACTIVE_TASK = 'CHANGE_ACTIVE_TASK';
export const CHANGE_TASK_STATE = 'CHANGE_TASK_STATE';

export const loadTasksSuccess = (tasks) => ({type: LOAD_TASKS_SUCCESS,payload: { tasks }});
export const changeActiveTask = (id) => ({type: CHANGE_ACTIVE_TASK,payload: id});
export const changeTaskState = (id) => ({type: CHANGE_TASK_STATE,payload: id});
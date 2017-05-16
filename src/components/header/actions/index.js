export const CHANGE_FILTER_BY_COMPLETE = 'CHANGE_FILTER_BY_COMPLETE';
export const CHANGE_FILTER_BY_NAME = 'CHANGE_FILTER_BY_NAME';


export const changeFilterByComplete = (status) => ({type: CHANGE_FILTER_BY_COMPLETE, payload: status});
export const changeFilterByName = (name) => ({type: CHANGE_FILTER_BY_NAME, payload: name});

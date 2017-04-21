import * as Actions from '../actions/tasks';

const initialState = {
    items: null,
    selectedItem: null
};

export default function tasksReducer (state = initialState, action) {
    switch (action.type) {
        case Actions.LOAD_TASKS_SUCCESS:
            return {...state, items: action.payload}
        default:
            return state
    }
}
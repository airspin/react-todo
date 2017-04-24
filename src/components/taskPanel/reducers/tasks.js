import * as Actions from '../actions/tasks';
import * as ActionsCats from '../../../actions/categories';

const initialState = {
    items: null,
    activeTask: null,
    filter: {
        byActiveCat: null,
        byName: null,
        byComplete: null
    }
};

export default function tasksReducer (state = initialState, action) {

    switch (action.type) {
        case Actions.LOAD_TASKS_SUCCESS:
            return {...state, items: action.payload.tasks};
        case ActionsCats.CHANGE_ACTIVE_CAT:
            const filter = state.filter;
            return {...state, filter: {...filter, byActiveCat:action.payload}};
        case Actions.CHANGE_TASK_STATE:
            const task = state.items[action.payload];
            const items = state.items;
            return {...state, items: {...items, [action.payload]: {...task, isCompleted : !task.isCompleted }}};
        default:
            return state
    }
}
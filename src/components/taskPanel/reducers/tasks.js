import * as Actions from '../actions';
import * as ActionsCats from '../../categoryPanel/actions/categories';
import * as ActionsFilter from '../../header/actions'

const initialState = {
    items: {},
    activeTask: null,
    filters: {
        byActiveCat: null,
        byName: '',
        byComplete: false
    }
};

export default function tasksReducer (state = initialState, action) {
    const filters = state.filters;
    const items = state.items;
    const removeTasksFromSubcat = (catIdsToRemove,items) => {
        let newItems = JSON.parse(JSON.stringify(items));
        Object.values(items).forEach(task => {
            catIdsToRemove.forEach(id => {
                if (task.category === id)
                    delete newItems[task.id]
            })
        });
        return newItems
    };
    const removeTask = (id,items) => {
        let newItems = JSON.parse(JSON.stringify(items));
        delete newItems[id];
        return newItems;
    };
    switch (action.type) {
        case Actions.LOAD_TASKS_SUCCESS:
            return {...state, items: action.payload.tasks};
        case ActionsCats.CHANGE_ACTIVE_CAT:
            return {...state, filters: {...filters, byActiveCat:action.payload}};
        case ActionsFilter.CHANGE_FILTER_BY_COMPLETE:
            return {...state, filters: {...filters, byComplete:!filters.byComplete}};
        case ActionsFilter.CHANGE_FILTER_BY_NAME:
            return {...state, filters: {...filters, byName:action.payload}};
        case Actions.CHANGE_TASK_STATE:
            const task = state.items[action.payload];
            return {...state, items: {...items, [action.payload]: {...task, isCompleted : !task.isCompleted }}};
        case Actions.ADD_NEW_TASK:
            return {...state,items: {...items,[action.payload.id]:action.payload}};
        case Actions.TASK_REMOVE_BY_CATEGORY:
            return {...state, items: removeTasksFromSubcat(action.payload,items)};
        case Actions.TASK_CHANGE_EDITMODE:
            return {...state, activeTask:action.payload};
        case Actions.TASK_REMOVE:
            return {...state, items: removeTask(action.payload,items)};
        case Actions.TASK_MOVE_TO_CAT:
            return {...state,activeTask: {...state.activeTask, category:action.payload}};
        default:
            return state
    }
}
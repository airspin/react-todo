import * as Actions from '../actions/categories';

const initialState = {
    items: null,
    activeCat: null
};

export default function categoriesReducer(state = initialState, action) {
    const items = state.items;
    const removeAllSubcat = (catIdsToRemove,items) => {
        let newItems = Object.assign({}, items);
        catIdsToRemove.forEach(id => {
            delete newItems[id]
        });
        return newItems
    };
    switch (action.type) {
        case Actions.LOAD_CATEGORIES_SUCCESS:
            return {...state, items: action.payload.categories};
        case Actions.CHANGE_ACTIVE_CAT:
            return {...state, activeCat:action.payload};
        case Actions.ADD_NEW_CATEGORY_ITEM:
            return {...state, items:{...items,[action.payload.id]:action.payload}};
        case Actions.CATEGORY_REMOVE_CHILD:
            return {...state, items: removeAllSubcat(action.payload,items)};
        default:
            return state;
    }
}
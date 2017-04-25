import * as Actions from '../actions/categories';

const initialState = {
    items: null,
    activeCat: null
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.LOAD_CATEGORIES_SUCCESS:
            return {...state, items: action.payload.categories};
        case Actions.CHANGE_ACTIVE_CAT:
            return {...state, activeCat:action.payload}
        default:
            return state;
    }
}
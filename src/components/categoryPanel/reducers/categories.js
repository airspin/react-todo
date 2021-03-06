import * as Actions from '../actions/categories';

const initialState = {
    items: {},
    activeCat: null
};

export default function categoriesReducer(state = initialState, action) {
    const items = state.items;
    const removeAllSubcat = (catIdsToRemove,items) => {
        let newItems = JSON.parse(JSON.stringify(items));
        catIdsToRemove.forEach(id => {
            delete newItems[id]
        });
        return newItems
    };
    const renameCat = (id,newName) => {
        let newItems = JSON.parse(JSON.stringify(items));
        console.log(newItems[id]);
        newItems[id].name = newName;
        if(newItems[1] === items[1]) {
            console.error('It\'s fuck up!!!!');
        }
        return newItems;
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
        case Actions.RENAME_CATEGORY:
            return {...state, items: renameCat(action.payload.id,action.payload.newName)};
        default:
            return state;
    }
}
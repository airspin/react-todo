import * as Actions from '../actions/categories';

const initialState = {
    items: null,
    activeCat: null
};

export default function categoriesReducer(state = initialState, action) {
    const items = state.items;
    const tasks = state.tasks;
    const removeTasksFromSubcat = (ids,items) => {

        return items
    };
    const removeAllSubcat = (id,items) => {
        let newItems = Object.assign({}, items);
        let catIdsToRemove = [];
        console.log('Начинаем');
        const findChildren = (id,items) => {
            console.log('Поехали!');
            catIdsToRemove.push(id);
            Object.values(items).forEach(item =>{
                if (item.parent === id) {
                    findChildren(item.id,newItems);
                }
            })
        };
        findChildren(id,newItems);
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
        case Actions.DELETE_CATEGORY:
            return {...state, items: removeAllSubcat(action.payload,items)};
        default:
            return state;
    }
}
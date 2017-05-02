import { TASK_REMOVE_BY_CATEGORY } from '../components/taskPanel/actions';
import { CATEGORY_REMOVE_CHILD } from '../components/categoryPanel/actions/categories';
export const removeCategory = store => next => action => {
    if (action.type === 'REMOVE_CATEGORY') {
        const state = store.getState();
        const categories = Object.assign({},state.categories.items);
        const findAllSubcat = (id,items) => {
            let newItems = Object.assign({}, items);
            let catIdsToRemove = [];
            const findChildren = (id,items) => {
                catIdsToRemove.push(id);
                Object.values(items).forEach(item =>{
                    if (item.parent === id) {
                        findChildren(item.id,newItems);
                    }
                })
            };
            findChildren(id,newItems);
            return catIdsToRemove;
        };
        const catIds = findAllSubcat(action.payload,categories);
        let  payload = catIds;
        next({ type: TASK_REMOVE_BY_CATEGORY, payload });
        next({ type: CATEGORY_REMOVE_CHILD, payload });
    } else {
        next(action);
    }
};



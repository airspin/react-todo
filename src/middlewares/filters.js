import { browserHistory } from 'react-router';
export const filters = store => next => action => {
    const payload = action.payload;
    let location = browserHistory.getCurrentLocation();
    const pushHistory = (name,value=payload) => {
        if (value){
            location.query[name] = value;
        } else {
            delete location.query[name];
        }
        browserHistory.push(location);
    }
    switch (action.type) {
        case 'CHANGE_ACTIVE_CAT':
            pushHistory('activeCat');
            break;
        case 'CHANGE_FILTER_BY_NAME':
            pushHistory('filterByName');
            break;
        case 'CHANGE_FILTER_BY_COMPLETE':
            pushHistory('filterByComplete');
            break;
        case 'REMOVE_CATEGORY':
            let activeCat = +location.query.activeCat;
            if (activeCat) {
                if (activeCat===payload) {
                    delete location.query.activeCat;
                    browserHistory.push(location);
                }
            }
            break;
        case 'TASK_CHANGE_EDITMODE':
            if (payload) {
                location.pathname='/editor/'+payload.id;
            } else {
                location.pathname='';
            }
            browserHistory.push(location);
            break;
    }
    next(action);
};
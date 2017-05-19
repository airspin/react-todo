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
    };
    if (!~location.pathname.indexOf('task/')) {
        switch (action.type) {
            case 'CHANGE_ACTIVE_CAT':
                console.log('локейшн из ACTIVE_CAT:',location);
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
            default:
                break
        }
    }
    if (action.type === 'TASK_CHANGE_EDITMODE') {
        if (payload) {
            if (!~location.pathname.indexOf('task/')){
                delete location.query.activeCat;
                location.pathname='/task/'+payload.id;
            }
        } else {
            location.pathname='';
        }
        browserHistory.push(location);
    }
    next(action);
};
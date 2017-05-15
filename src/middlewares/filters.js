import { browserHistory } from 'react-router';
export const filters = store => next => action => {
    if (action.type === 'CHANGE_ACTIVE_CAT') {
        const activeCat = action.payload;
        if (activeCat){
            browserHistory.push('?activeCat='+activeCat)
        } else {
            browserHistory.push('')
        }
        next(action);
    } else {
        next(action);
    }
};



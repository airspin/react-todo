import * as Actions from '../actions';

export default function modalWindows(state = [], action) {
    let modals = [...state];
    switch (action.type) {
        case Actions.SHOW_MODAL:
            modals.push(action.payload);
            return modals;
        case Actions.HIDE_MODAL:
            modals.pop();
            return modals;
        default:
            return state
    }
}


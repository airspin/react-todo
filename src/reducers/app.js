import { INITIAL_STATE_SUCCESS } from '../actions/app';

export default function initStateReducer(state = false, action) {
    return action.type === INITIAL_STATE_SUCCESS ? true : state;
}
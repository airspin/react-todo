const initialState = {
    activeCat: null
}

export default function data (state = initialState, action) {
    switch (action.type){
        case 'LOAD_CATEGORIES':
            return {...state, activeCat: action.payload}
        case 'LOAD_TASKS':
            return action.payload
        case 'CHANGE_ACTIVE_CAT':
            return {...state, activeCat: action.payload}
        default:
            return state
    }
}


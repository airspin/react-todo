const initialState = {
    id: null
}

export default function activeCat (state=initialState, action) {
    switch (action.type) {
        case 'CHANGE_ACTIVE_CAT':
            return {...state, id: action.payload}
        default:
            return state
    }
}
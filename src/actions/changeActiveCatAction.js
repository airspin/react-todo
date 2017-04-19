const CHANGE_ACTIVE_CAT = 'CHANGE_ACTIVE_CAT';

export function changeActiveCatAction(id) {
    return {
        type: CHANGE_ACTIVE_CAT,
        payload: id
    }
}
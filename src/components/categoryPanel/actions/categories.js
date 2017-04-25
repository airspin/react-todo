// export const LOAD_CATEGORIES_REQUEST = 'LOAD_CATEGORIES_REQUEST';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const CHANGE_ACTIVE_CAT = 'CHANGE_ACTIVE_CAT';
// export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';

// const loadCategoriesRequest = () => ({type: LOAD_CATEGORIES_REQUEST});
export const loadCategoriesSuccess = (categories) => ({type: LOAD_CATEGORIES_SUCCESS, payload: { categories }});
export const changeActiveCatAction = (id) => ({type: CHANGE_ACTIVE_CAT, payload: id});
// const loadCategoriesFailure = (error) => ({type: LOAD_CATEGORIES_FAILURE, payload: { error }});



// export const LOAD_CATEGORIES_REQUEST = 'LOAD_CATEGORIES_REQUEST';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const CHANGE_ACTIVE_CAT = 'CHANGE_ACTIVE_CAT';
export const ADD_NEW_CATEGORY_ITEM = 'ADD_NEW_CATEGORY_ITEM';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';

// const loadCategoriesRequest = () => ({type: LOAD_CATEGORIES_REQUEST});
export const loadCategoriesSuccess = (categories) => ({type: LOAD_CATEGORIES_SUCCESS, payload: { categories }});
export const changeActiveCatAction = (id) => ({type: CHANGE_ACTIVE_CAT, payload: id});
export const addNewCategoryItem = (category) => ({type: ADD_NEW_CATEGORY_ITEM, payload: category});
export const deleteCategory = (id) => ({type: DELETE_CATEGORY, payload: id});
// const loadCategoriesFailure = (error) => ({type: LOAD_CATEGORIES_FAILURE, payload: { error }});



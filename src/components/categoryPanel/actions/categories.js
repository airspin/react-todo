export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const CHANGE_ACTIVE_CAT = 'CHANGE_ACTIVE_CAT';
export const ADD_NEW_CATEGORY_ITEM = 'ADD_NEW_CATEGORY_ITEM';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const RENAME_CATEGORY = 'RENAME_CATEGORY';
export const CATEGORY_REMOVE_CHILD = 'CATEGORY_RCH';

// export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';

// const loadCategoriesRequest = () => ({type: LOAD_CATEGORIES_REQUEST});
export const loadCategoriesSuccess = (categories) => ({type: LOAD_CATEGORIES_SUCCESS, payload: { categories }});
export const changeActiveCat = (id) => ({type: CHANGE_ACTIVE_CAT, payload: id});
export const addNewCategoryItem = (category) => ({type: ADD_NEW_CATEGORY_ITEM, payload: category});
export const removeCategory = (id) => ({type: REMOVE_CATEGORY, payload: id});
export const renameCategory = (id,newName) => ({type: RENAME_CATEGORY, payload: {id,newName}});
// const loadCategoriesFailure = (error) => ({type: LOAD_CATEGORIES_FAILURE, payload: { error }});



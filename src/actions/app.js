import { loadCategoriesSuccess } from '../components/categoryPanel/actions/categories';
import { loadTasksSuccess } from '../components/taskPanel/actions/index';

export const INITIAL_STATE_REQUEST = 'INITIAL_STATE_REQUEST';
export const INITIAL_STATE_SUCCESS = 'INITIAL_STATE_SUCCESS';
export const INITIAL_STATE_FAILURE = 'INITIAL_STATE_FAILURE';

const initialStateRequest = () => ({type: INITIAL_STATE_REQUEST});
const initialStateSuccess = (data) => ({type: INITIAL_STATE_SUCCESS, payload: { data }});
const initialStateFailure = (error) => ({type: INITIAL_STATE_FAILURE, payload: { error }});


const todoListData = {
    categories: {
        1:{
            name:'Работа',
            id:1,
            parent:null
        },
        2:{
            name:'Спорт',
            id:2,
            parent:null
        },
        3:{
            name:'Обучение',
            id:3,
            parent:5
        },
        4:{
            name:'Отдых',
            id:4,
            parent:3
        },
        5:{
            name:'Командировки',
            id:5,
            parent:1
        },
        6:{
            name:'Покупки',
            id:6,
            parent:null
        }
    },

    tasks: {
        1: {
            name: 'task 1 cat 1',
            id: 1,
            category: 1,
            isCompleted: false
        },
        2: {
            name: 'task 2 cat 1',
            id: 2,
            category: 1,
            isCompleted: false
        },
        3: {
            name: 'task 3 cat 1',
            id: 3,
            category: 1,
            isCompleted: false
        },
        4: {
            name: 'task 1 cat 2',
            id: 4,
            category: 2,
            isCompleted: false
        },
        5: {
            name: 'task 2 cat 2',
            id: 5,
            category: 2,
            isCompleted: false
        },
        6: {
            name: 'task 3 cat 2',
            id: 6,
            category: 2,
            isCompleted: false
        },
        7: {
            name: 'task 1 cat 3',
            id: 7,
            category: 3,
            isCompleted: false
        },
        8: {
            name: 'task 2 cat 3',
            id: 8,
            category: 3,
            isCompleted: false
        },
        9: {
            name: 'task 3 cat 3',
            id: 9,
            category: 3,
            isCompleted: false
        }
    },
};

export const loadInitialState = () => {
    return dispatch => {
        dispatch(initialStateRequest());
        try {
            setTimeout(() => {
                console.log('loading data');
                dispatch(loadCategoriesSuccess(todoListData.categories));
                dispatch(loadTasksSuccess(todoListData.tasks));
                dispatch(initialStateSuccess(todoListData));
                dispatch({type:'@@redux-undo/CLEAR_HISTORY'});
                //dispatch(loadTasksSuccess(todoListData.tasks));
                //dispatch(initialStateSuccess(todoListData));
            }, 1000);
        } catch (e) {
            dispatch(initialStateFailure(e.message));
        }
    }
};
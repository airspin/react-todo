LOAD_CATEGORIES
LOAD_TASKS

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
            name: 'task 1',
            id: 1,
            category: 1,
            isCompleted: false
        },
        2: {
            name: 'task 1',
            id: 2,
            category: 1,
            isCompleted: false
        },
        3: {
            name: 'task 1',
            id: 3,
            category: 1,
            isCompleted: false
        },
    },
}

export const loadInitialState = () => dispatch => {
    setTimeout(() => {
        console.log('loading data');
        dispatch({type:'LOAD_CATEGORIES', payload: todoListData.categories});
        dispatch({type:'LOAD_TASKS', payload: todoListData.tasks})
    }, 1000)
};
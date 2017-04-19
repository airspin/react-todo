const initialState = {
    categories: {
        1:{
            name:'Работа',
            id:1,
            parent:[]
        },
        2:{
            name:'Спорт',
            id:2,
            parent:[]
        },
        3:{
            name:'Обучение',
            id:3,
            parent:[5]
        },
        4:{
            name:'Отдых',
            id:4,
            parent:[]
        },
        5:{
            name:'Командировки',
            id:5,
            parent:[1]
        },
        6:{
            name:'Покупки',
            id:6,
            parent:[]
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

    activeCat: null
};

export default function data (state = initialState, action) {
    switch (action.type){
        case 'GET_DATA':
            return state
        default:
            return state
    }
}


/* eslint-disable */
import React, { Component } from 'react';
import ListPageHeader from './components/ListPageHeader'
import ProgrBar from './components/progressBar';
import TodoPanels from './components/TodoPanels';

const categories=[
    {
        name:'Работа',
        id:1,
        subCat: [
            {
                name:'Спорт 2',
                id:2
            },
            {
                name:'Обучение 2',
                id:3
            },
            {
                name:'Отдых 2',
                id:4
            },
            {
                name:'Командировки 2',
                id:5
            }
        ]
    },
    {
        name:'Спорт',
        id:2
    },
    {
        name:'Обучение',
        id:3
    },
    {
        name:'Отдых',
        id:4
    },
    {
        name:'Командировки',
        id:5
    },
    {
        name:'Покупки',
        id:6
    },
];

class App extends Component {
    render() {
        return (
            <div className="container">
                <ListPageHeader />
                <ProgrBar />
                <TodoPanels categories = {categories} />
                <div className="col-md-4">

                </div>

            </div>
        );
    }
}

export default App;

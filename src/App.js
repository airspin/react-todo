/* eslint-disable */
import React, { Component } from 'react';
import ListPageHeader from './components/ListPageHeader'
import ProgrBar from './components/progressBar';
import TaskPanel from './components/taskPanel';
import CategoryPanel from './components/categoryPanel';
import '../src/css/fontawesome/css/font-awesome.min.css';


const categories=[
    {
        name:'Работа',
        id:1,
        subCat: [
            {
                name:'Спорт 2',
                id:11
            },
            {
                name:'Обучение 2',
                id:12
            },
            {
                name:'Отдых 2',
                id:13,
                subCat: [
                    {
                        name:'Спорт 21',
                        id:131
                    },
                    {
                        name:'Обучение 21',
                        id:132
                    },
                    {
                        name:'Отдых 21',
                        id:133
                    },
                    {
                        name:'Командировки 21',
                        id:134
                    }
                ]
            },
            {
                name:'Командировки 2',
                id: 14
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
                <div className="row">
                    <div className="col-md-4">
                        <CategoryPanel categories={categories} selectCat={this.props.onSelectCat}/>
                    </div>
                    <div className="col-md-8">
                        <TaskPanel />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
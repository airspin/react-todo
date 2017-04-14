import React , { Component } from 'react';
import './css/CategoryItem.css';



function renderCategories(categories) {
    return (
        <ul className="pure-list">
            {categories.map(cat => renderCategory(cat))}
        </ul>
    )
}

function renderCategory({ id, name, subCat }) {
    return (
        <li key={id}>
                <span className="list-group-item task-item" href="#">
                    {subCat && subCat.length &&
                        <span className="pull-left padd-right-sm show-subcat-btn">
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </span>
                    }
                    <span className="task-title">
                        {name} &nbsp;
                    </span>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <span className="pull-right">
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                        <i className="fa fa-plus-square-o addBtn" aria-hidden="true"></i>
                    </span>
                </span>
            {subCat && subCat.length && renderCategories(subCat)}
        </li>
    )
}





class CategoryItem extends Component {
    render() {
        return (
            renderCategories(this.props.categories)
        )
    }
}

export default CategoryItem;
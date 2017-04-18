import React , { Component } from 'react';
import './css/CategoryItem.css';

let cnt = 0;


class CategoryItem extends Component {
    constructor(props){
        super(props);
        this.state = { isClosed: true, isActive: false}
        this.chi = new Map();
    }

    toggleList = () => {
        // const isClosed = !this.state.isClosed;
        if(!this.state.isClosed) {
            this.close();
        } else {
            this.setState({isClosed: !this.state.isClosed});
        }
    }

    toggleAtive = () => {
        this.setState({isActive:!this.state.isActive})
    }

    close = () => {
        if(!this.state.isClosed) {
            let child = Array.from(this.chi.values());
            child.forEach(children => children.close());
            this.setState({isClosed: true});

        }
    }


    _renderChild(categories) {

        return (
            <ul className={"pure-list" + (this.state.isClosed ? ' hidden-list' : '')} >
                {
                    categories.map(
                        (cat, i) => <CategoryItem ref={ r => {this.chi.set(cat.id, r);} } category={cat} key={cat.id}/> )
                }
            </ul>
        );
    }

    render() {
        const {subCat, name, id} = this.props.category;
        console.log(`Render item ${id} count ${++cnt}`);
        return (
            <li>

                <span className={"list-group-item task-item" + (this.state.isActive ? " active" : "")} onClick={this.toggleAtive}>
                    {subCat && subCat.length &&
                    <span className="pull-left padd-right-sm show-subcat-btn" onClick={this.toggleList}>
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

                {subCat && subCat.length && !this.state.isClosed && this._renderChild(subCat)}
            </li>
        )
    }
}

export default CategoryItem;
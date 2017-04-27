import React , { Component } from 'react';
import './css/CategoryItem.css';


class CategoryItem extends Component {
    constructor(props){
        super(props);
        this.state = { isClosed: true};
        this.chi = new Map();
    }

    toggleList = (e) => {
        e.stopPropagation();
        if(!this.state.isClosed) {
            this.close();
        } else {
            this.setState({isClosed: !this.state.isClosed});
        }
    }


    close = () => {
        if(!this.state.isClosed) {
            let child = Array.from(this.chi.values());
            child.forEach(children => children.close());
            this.setState({isClosed: true});

        }
    }


    _renderChild(categories,children,activeCat,toggleActive) {
        console.log(categories,'Suuuub');
        return (
            <ul className={"pure-list" + (this.state.isClosed ? ' hidden-list' : '')} >
                {
                    categories.map(
                        (cat, i) => <CategoryItem ref={ r => {this.chi.set(cat.id, r);} } isActive={activeCat === cat.id}
                                                  category={cat} key={cat.id} activeCat={activeCat} children={children} toggleActive={toggleActive}/> )
                }
            </ul>
        );
    }

    render() {
        const {activeCat,toggleActive} = this.props;
        const { id,name} = this.props.category;
        const children = this.props.children;
        const myChildren = children[id];
        console.log(this.props,'iteeem');
        console.log(`subCat ${this.props.isActive}`);
        return (
            <li>
                <span className={"list-group-item task-item" + (activeCat === id ? " active" : "")} onClick={()=>toggleActive(id)}>
                    <span className="pull-left padd-right-sm show-subcat-btn" onClick={this.toggleList}>
                        {myChildren && myChildren.length &&
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        }
                    </span>
                    <span className="task-title">
                        {name} &nbsp;
                    </span>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <span className="pull-right">
                        <i className="fa fa-trash-o" aria-hidden="true" onClick={()=>(this.props.deleteCat(id))}></i>
                        <i className="fa fa-plus-square-o addBtn" aria-hidden="true"></i>
                    </span>
                </span>
                {myChildren && myChildren.length && !this.state.isClosed && this._renderChild(myChildren,children,activeCat,toggleActive)}
            </li>
        )
    }
}

export default CategoryItem;

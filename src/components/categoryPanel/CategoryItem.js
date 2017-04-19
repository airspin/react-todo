import React , { Component } from 'react';
import { connect } from 'react-redux';
import { changeActiveCatAction } from '../../actions/changeActiveCatAction'
import './css/CategoryItem.css';

let cnt = 0;


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

    toggleActive = (id) => {
        console.log(id);
        console.log(this.props.dataStore);
        this.props.onSelectCat(id)
    }

    close = () => {
        if(!this.state.isClosed) {
            let child = Array.from(this.chi.values());
            child.forEach(children => children.close());
            this.setState({isClosed: true});

        }
    }


    _renderChild(categories) {
        console.log(categories);
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
        // console.log(`Render item ${id} count ${++cnt}`);
        console.log(subCat);
        return (
            <li>
                <span className={"list-group-item task-item" + (this.props.activeCat.id === id ? " active" : "")} onClick={()=>this.toggleActive(id)}>
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


const mapStateToProps = (state) => {
    return {
        dataStore: state.data,
        activeCat: state.activeCat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCat: (id)=>{
            dispatch(changeActiveCatAction(id))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryItem);

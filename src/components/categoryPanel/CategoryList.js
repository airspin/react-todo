import React, { Component } from 'react';
// import s from './style.css';

import { connect } from 'react-redux';
import { changeActiveCatAction, removeCategory, addNewCategoryItem } from './actions/categories';
import { hideModal, showModal } from '../ModalWindow/actions';
import CategoryItem from './CategoryItem';
import { sortArrOfObj } from '../../utils/helpers';
// const makeTree = (obj) => {
//     var tree = [];
//     // console.info(tree,'before');
//     function recurseTree(cont,init) {
//         var tempObj = {};
//         tempObj.id = cont.id;
//         tempObj.name = cont.name;
//         if (cont.subCat && cont.subCat.length) {
//             tempObj.subCat=cont.subCat;
//             recurseTree(tempObj.subCat,cont.subCat);
//         }
//         init.push(tempObj);
//     }
//
//
//     obj.map((cat) => {
//         var subCat = obj.subCat;
//         // if (subCat && subCat.length){
//         //     tree[cat.id]={name: cat.name,subCat: []};
//         //     recurseTree(tree[cat.id]);
//         // }
//         recurseTree(cat,tree);
//         // tree[cat.id]=cat.name;
//     });
//
//     console.log(tree);
// };

class CategoryList extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal: false,
            subcatName:'',
        }
    }
    changeNameText = (e)=>{
        const val = e.target.value;
        this.setState({
            subcatName:val
        })
    }
    addSubcatModal = (e,id) => {
        e.stopPropagation();
        this.props.showModal({
            modalType:'AddSubcat',
            modalParams:{
                id,
                title: 'Add new subcategory',
                templ: 'AddSubcat',
                confirmBtnName: 'Add',
                cancelBtnName: 'Cancel'
            },
        })
    }
    renameCatModal = (e,id) => {
        e.stopPropagation();
        this.props.showModal({
            modalType:'RenameCat',
            modalParams:{
                id,
                title: 'Rename category',
                templ: 'RenameCat',
                confirmBtnName: 'Rename',
                cancelBtnName: 'Cancel'
            },
        })
    }
    toggleActive = (id) => {
        console.log(`ta ${id}`);
        const activeCat = this.props.activeCat;
        if (id !== activeCat) {
            this.props.onSelectCat(id)
        } else {
            this.props.onSelectCat(null)
        }
    }
    removeCat = (e,id) => {
        e.stopPropagation();
        this.props.onRemoveCat(id);
    }
    onConfirmBtn = (name,parent)=>{
        let cat = {
            name: name,
            id: Date.now(),
            parent: parent
        };
        this.props.addNewCategory(cat);
    }
    render() {
        const { rootCat,children }  = this.props.data;
        const activeCat = this.props.activeCat;
        console.log('CategoriesList render');
        // console.log(this.props);
        return(
            <div className="row">
                <div className="col-md-12 fixed-height">
                    <ul className="pure-list">
                        {
                            rootCat.map((cat) =>
                                <CategoryItem key={cat.id}
                                              children={children}
                                              category={cat}
                                              activeCat={activeCat}
                                              toggleActive={this.toggleActive}
                                              removeCat={this.removeCat}
                                              addSubcatModal={this.addSubcatModal}
                                              renameCatModal={this.renameCatModal}
                                />)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

let cacheCategories = null;

function catSelector (categories) {
    if (!categories) {
        return null;
    }
    let rootCat=[];
    let children={};
    const sorter = sortArrOfObj('id','dec');
    Object.keys(categories).forEach((catId) => {
        let parent = categories[catId].parent;
        let category = categories[catId];
        if (parent) {
            (children[parent]) ? children[parent].push(category) : children[parent]=[category];
        } else {
            rootCat.push(category)
        }
    });

    rootCat.sort(sorter);

    // if(!cacheCategories) {
    if(1) {
        cacheCategories = {
            rootCat: rootCat,
            children: children
        };
    }

    return cacheCategories;
}

const mapStateToProps = ({categories}) => {
    return {
        data:  catSelector(categories.items),
        activeCat: categories.activeCat
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        onSelectCat: (id) => dispatch(changeActiveCatAction(id)),
        onRemoveCat: (id) => dispatch(removeCategory(id)),
        addNewCategory: (category) => dispatch(addNewCategoryItem(category)),
        showModal: (modaldata) => dispatch(showModal(modaldata)),
        hideModal: () => dispatch(hideModal())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);


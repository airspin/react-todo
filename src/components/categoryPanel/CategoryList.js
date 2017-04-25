import React, { PureComponent } from 'react';
// import s from './style.css';

import { connect } from 'react-redux';
import { changeActiveCatAction } from './actions/categories'
import CategoryItem from './CategoryItem';


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

class CategoryList extends PureComponent {
    toggleActive = (id) => {
        console.log(`ta ${id}`);
        const activeCat = this.props.activeCat;
        if (id !== activeCat) {
            this.props.onSelectCat(id)
        } else {
            this.props.onSelectCat(null)
        }
    }
    render() {
        const { rootCat,children }  = this.props.data;
        const activeCat = this.props.activeCat;
        console.log('render');
        console.log(this.props);
        return(
            <div className="row">
                <div className="col-md-12 fixed-height">
                    <ul className="pure-list">
                        {
                            rootCat.map((cat) =>
                                <CategoryItem key={cat.id} children={children} category={cat} activeCat={activeCat}
                                              toggleActive={this.toggleActive} />)
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
    Object.keys(categories).map((catId) => {
        let parent = categories[catId].parent;
        let category = categories[catId];
        if (parent) {
            (children[parent]) ? children[parent].push(category) : children[parent]=[category];
        } else {
            rootCat.push(category)
        }
    });

    if(!cacheCategories) {
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
        onSelectCat: (id)=> {
            dispatch(changeActiveCatAction(id))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);


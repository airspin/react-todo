import React, { Component } from 'react';
// import s from './style.css';

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




class CategoryList extends Component {

    render() {
        const { categories } = this.props;
        return(
            <div className="row">
                <div className="col-md-12 fixed-height">
                    <ul className="pure-list">
                        {categories.map(cat =>
                            <CategoryItem key={cat.id} category={cat}/>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CategoryList;

/*
 <ul>
 {this.props.categories.map((cat) => {
 return(
 <li key={cat.id}>
 {cat.name}
 {cat.subCat &&
 (
 <ul>
 {cat.subCat.map( sCat => getLi(sCat))}
 </ul>
 )
 }
 </li>
 )
 })}
 </ul>

 */
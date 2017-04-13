import React, { Component } from 'react';
import s from './style.css';

class CategoryList extends Component {

    render() {
        return(
            <div className="row">
                <div className="col-md-12 fixed-height">
                    <ul>
                        {this.props.categories.map((cat) => {
                           return(
                               <li key={cat.id}>
                                   {cat.name}
                                   {cat.subCat &&
                                       (
                                           <ul>
                                               {cat.subCat.map((sCat) => {
                                                   return (
                                                       <li key={sCat.id}>
                                                           {sCat.name}
                                                       </li>
                                                   )
                                               })}
                                           </ul>
                                       )
                                   }
                               </li>
                           )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CategoryList;
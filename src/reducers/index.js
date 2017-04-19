import  { combineReducers } from 'redux';
import data from './data';
import activeCat from './activeCat';


export default combineReducers({
    data,
    activeCat
})
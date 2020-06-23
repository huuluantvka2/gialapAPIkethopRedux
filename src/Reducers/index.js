import {combineReducers} from 'redux';
import products from './Products';
import cart from './Cart';
const myReducers = combineReducers(
    {
        products,
        cart
    }
)
export default myReducers;
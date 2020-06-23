import * as Types from '../Contants/index';
var initialState = [];
const products = (state = initialState,action) =>{
    switch(action.type){
        case Types.FETCH_PRODUCT : 
        state = action.products;
        return [...state];
        case Types.ADD_PRODUCT : 
        state.push(action.products);
        return [...state];
        default: return [...state];
    }
}

export default products;
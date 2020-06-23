import * as Types from '../Contants/index';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
const findIndex = (id,state) => {
    var i,result = -1;
    for(i=0;i<state.length;i++){
        if(state[i].product.id === id){
            result = i;
        }
    }
    return result;
};
const Cart = (state=initialState,action) =>{
    var index=-1;
    var {product,quantity,id} = action;
    switch(action.type){
        case Types.ADD_TO_CART:
        index = findIndex(product.id,state);
        console.log(state);
        if(index !== -1){
            state[index].quantity +=quantity
        }
        else{
            state.push({
                product : product,
                quantity : quantity
            })
        }
        localStorage.setItem('CART',JSON.stringify(state));
        return [...state];
        case Types.DELETE_PRODUCT: 
        index = findIndex(id,state);
        if(index !== -1){
            state.splice(index,1);
        }
        localStorage.setItem('CART',JSON.stringify(state));
        return [...state];
        case Types.UPDATE_QUANTITY : 
        index = findIndex(product.id,state);
        if(index !== -1){
            state[index].quantity = quantity;
        }
        localStorage.setItem('CART',JSON.stringify(state));
        return [...state];
        default : return [...state];
    }
}

export default Cart;
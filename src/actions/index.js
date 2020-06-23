import * as Types from '../Contants/index';
import apiCaller from '../Utils/apiCaller';
export const actFetchProductsRequest = () =>{
    return dispatch =>{
        apiCaller('products','get',null).then(res =>{
            dispatch(actFetchProducts(res.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCT,
        products
    }
};
export const actAddProductsRequest = (products) =>{
    return dispatch =>{
        apiCaller('products','post',products).then(res =>{
            dispatch(actAddProducts(res.data));
        })
    }
}
export const actAddProducts = (products) => {
    return {
        type : Types.ADD_PRODUCT,
        products
    }
};
export const onAddToCart = (product,quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
};
export const actDelete = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
};
export const onUpdateQuantity = (product,quantity) => {
    return {
        type : Types.UPDATE_QUANTITY,
        product,
        quantity
    }
};
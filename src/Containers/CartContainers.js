import React, { Component } from 'react';
import Cart from '../Components/Cart';
import { connect } from 'react-redux';
import CartItem from '../Components/CartItem';
import CartResult from '../Components/CartResult';
import { actDelete,onUpdateQuantity } from '../actions';
class CartContainers extends Component {
    onDelete = (cart) => {
        this.props.actDelete(cart.product.id);
    };
    updateQuantity = (product,quantity) => {
        this.props.onUpdateQuantity(product,quantity);
    };
    render() {
        var {cart} = this.props;
        return (
            <Cart >
                {this.showCart(cart)}
                {this.showCartResult(cart)}
            </Cart>
        );
    }
    showCart = (carts) => {
        var result = null;
        if(carts.length >0){
            result = carts.map((cart,index) =>{
                return <CartItem key={index} cart={cart} onDelete={this.onDelete} updateQuantity={this.updateQuantity} />
            })
        }
        return result;
    };
    showCartResult = (cart) => {
        return <CartResult cart={cart} />
    };
}

const mapStateToProps = state =>{
    return {
        cart : state.cart
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        actDelete : (id) =>{
            dispatch(actDelete(id));
        },
        onUpdateQuantity : (product,quantity) =>{
            dispatch(onUpdateQuantity(product,quantity))
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainers);
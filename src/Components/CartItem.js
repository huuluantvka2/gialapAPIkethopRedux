import React, { Component } from 'react';

class CartItem extends Component {
    onDelete = (cart) => {
        this.props.onDelete(cart);
    };
    onUpdateQuantity = (product,quantity) => {
        if(quantity>0){
            this.props.updateQuantity(product,quantity);
        }
    };
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <th className="vertical-align" style={{ width: '50%' }}>
                    <img src={cart.product.src} alt="" className="img-cart" width="35%" />
                    <h3 className="title-cart">{cart.product.name}</h3>
                </th>
                <td className="vertical-align">{cart.product.price}$</td>
                <td className="vertical-align">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <p className="mr-3 mt-3">{cart.quantity}</p>
                        <button type="button" onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity+1)} className="btn btn-sm btn-light-green">+</button>
                        <button type="button" onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity-1)} className="btn btn-sm btn-light-green">-</button>
                    </div>
                </td>
                <td className="vertical-align">{this.totalAmout(cart.quantity, cart.product.price)} <button type="button" onClick={() =>this.onDelete(cart)} className="btn btn-sm btn-light-green">X</button></td>
            </tr>
        );
    }
    totalAmout = (quantity, price) => {
        return quantity * price;
    };
}

export default CartItem;
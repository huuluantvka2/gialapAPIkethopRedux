import React, { Component } from 'react';

class CartResult extends Component {
    render() {
        var {cart} = this.props;
        return (
            <tr>
                <td className="vertical-align" />
                <td className="vertical-align" />
                <td className="vertical-align purchase">Tổng tiền : {this.showTotalAmout(cart)}$</td>
                <td className="vertical-align"><button type="button" className="btn btn-light-green">Thanh toán</button></td>
            </tr>
        );
    }
    showTotalAmout = (cart) => {
        var i,result = 0;
        for(i = 0;i<cart.length;i++){
            result +=cart[i].product.price*cart[i].quantity;
        }
        return result;
    };
}

export default CartResult;
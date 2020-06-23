import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="main-title mt-2">
                            Giỏ hàng<br /><img className="underline-img" src="./img/underline.png" alt="" />
                        </h1>
                    </div>
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col-6">Sản phẩm</th>
                                    <th scope="col-2">Giá</th>
                                    <th scope="col-2">Số lượng</th>
                                    <th scope="col-2">Tổng cộng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
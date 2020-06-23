import React, { Component } from 'react';
import FormUpload from './FormUpload';

class UploadProduct extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="main-title mt-2">
                            Đăng sản phẩm bán <br /><img className="underline-img" src="./img/underline.png" alt="" />
                        </h1>
                    </div>
                    <div className="col-md-8">
                        <FormUpload history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadProduct;
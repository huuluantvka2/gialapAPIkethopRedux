import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actAddProductsRequest} from '../actions/index';
class FormUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName : '',
            txtPrice : '',
            txtRating : '',
            linkImg : '',
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.name === 'abc' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        var {txtName,txtPrice,txtRating,linkImg} = this.state;
        var {history} = this.props;
        var products = {
            name : txtName,
            price : txtPrice,
            rating : txtRating,
            src : linkImg
        }
        this.props.actAddProductsRequest(products);
        history.push('/');
    };
    render() {
        var {txtName,txtPrice,txtRating,linkImg} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    {/* Material input */}
                    <label className="col-sm-4 col-form-label font-weight-bold">Tên sản phẩm</label>
                    <div className="col-sm-8">
                        <div className="md-form mt-0">
                            <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    {/* Material input */}
                    <label className="col-sm-4 col-form-label font-weight-bold">Giá</label>
                    <div className="col-sm-8">
                        <div className="md-form mt-0">
                            <input type="text" className="form-control" name="txtPrice" value={txtPrice} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    {/* Material input */}
                    <label className="col-sm-4 col-form-label font-weight-bold">Rate</label>
                    <div className="col-sm-8">
                        <div className="md-form mt-0">
                            <input type="text" className="form-control" name="txtRating" value={txtRating} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    {/* Material input */}
                    <label className="col-sm-4 col-form-label font-weight-bold">Link Ảnh</label>
                    <div className="col-sm-8">
                        <div className="md-form mt-0">
                            <input type="text" className="form-control" name="linkImg" value={linkImg} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-8">
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-md">
                            Đăng sản phẩm
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        actAddProductsRequest : (products) =>{
            dispatch(actAddProductsRequest(products));
        }
    }
}
export default connect(null,mapDispatchToProps)(FormUpload);
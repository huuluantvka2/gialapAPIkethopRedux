import React, { Component } from 'react';
import HomePage from '../Components/HomePage';
import ProductItem from '../Components/ProductItem';
import {connect} from 'react-redux';
import {actFetchProductsRequest} from '../actions/index';
class ProductHomePage extends Component {
    componentDidMount = () => {
        this.props.actFetchProductsRequest();
    };
    render() {
        var {products} = this.props;
        return (
            <HomePage >
                {this.showProductItem(products)}
            </HomePage>
        );
    }
    showProductItem = (products) => {
        var result = null;
        if(products.length>0){
            result = products.map((product,index) =>{
                return <ProductItem key={index} product={product} />
            })
        }
        return result;
    };
}
const mapStateToProps = state =>{
    return {
        products : state.products,
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return {
        actFetchProductsRequest : (products) =>{
            dispatch(actFetchProductsRequest(products));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductHomePage);
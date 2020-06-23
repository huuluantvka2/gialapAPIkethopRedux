import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onAddToCart} from '../actions/index';
class ProductItem extends Component {
    addToCart = (product) => {
      this.props.onAddToCart(product);
    };
    render() {
      var {product} = this.props;
        return (
            <div className="col-md-3 animation-appear product-hover mt-4 mb-2">
            <div className="card card-cascade wider">
              {/* Card image */}
              <div className="view view-cascade overlay">
                <img className="card-img-top mt-2" src={product.src} alt="" />
                <a href="#!">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/* Card content */}
              <div className="card-body card-body-cascade">
                {/* Title */}
                <a href="/#"><h4 className="card-title">{product.name}</h4></a>
                <p className="price">{product.price}đ</p>
                <div className="rating">
                  {this.showRating(product.rating)}
                </div>
                <button className="btn-me btn-cart mt-2 mr-1" onClick={()=>this.addToCart(product)}>
                  <i className="fas fa-shopping-cart" />
                </button>
                <button className="btn-me btn-buy mt-2 mr-1">
                  <i className="fab fa-amazon-pay" />
                </button>
              </div>
            </div>
          </div>
        );
    }
    showRating = (rating) => {
      var result = [];
      if(rating >0){
        for(var i=1;i<=rating;i++){
          result.push(<i key={i} className="fas fa-star" />)
        }
        for(var j=1;j<=5-rating;j++){
          result.push(<i key={i+j} className="far fa-star" />)
        }
      }
      return result;
    };
}
const mapDispathToProps = (dispatch,props) => {
    return {
      onAddToCart : (product) =>{
        dispatch(onAddToCart(product,1));
      }
    }
};
export default connect(null,mapDispathToProps)(ProductItem);
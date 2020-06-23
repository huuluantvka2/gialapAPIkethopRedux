import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="main-title mt-2">
                  Danh mục sản phẩm <br /><img className="underline-img" src="./img/underline.png" alt="" />
                </h1>
              </div>
              {/* productItem */}
                {this.props.children}
              {/* end productItem */}
            </div>
          </div>
        );
    }
}

export default HomePage;
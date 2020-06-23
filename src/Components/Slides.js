import React, { Component } from 'react';

class Slides extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="./img/product1.png" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./img/product2.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./img/product3.png" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-center sub-title">Tin công nghệ</h3>
                        <div className="row">
                            <a href="/#"><img src="./img/banner1.png" alt="" /></a>
                            <a href="/#"><img src="./img/banner2.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slides;
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FeatureWrapper } from "../../container/FeatureWrapper";
function GoodProduct() {
    return (
        <div>
            <FeatureWrapper>
        <Link to="/product_list" style={{ color: 'black', textDecoration: 'none' }}>
        <div className="card mb-3 postcard" style={{width: '420px'}}>
            <div className="row no-gutters">
                <div className="col-md-4 col-lg-4">
                    <img src="https://vietthuongshop.vn/upload/content/images/Tuvan/2019/7-2019/mau1-dan-piano-dien-casio-cdp-s100.jpg" alt="advertise" className="card-img-left"/>
                </div>
                    <div className="col-md-8 col-lg-8">
                    <div className="card-body d-flex flex-row-reverse justify-content-center">
                    <h5 className="card-title" >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                    </div>
            </div>
        </div>
    </div>
    </Link>
            </FeatureWrapper>
            <FeatureWrapper>
                <Link to="/product_list" style={{ color: 'black', textDecoration: 'none' }}>
            <div className="card mb-3 postcard" style={{width: '420px'}}>
            <div className="row no-gutters">
                <div className="col-md-4 col-lg-4">
                    <img src="https://pianoart.vn/wp-content/uploads/2019/10/web-01-1.png" alt="advertise" className="card-img-left"/>
                </div>
                    <div className="col-md-8 col-lg-8">
                            <div className="card-body d-flex flex-row-reverse justify-content-center">
                                
                    <h5 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
                            </div>
                            </div>
                    </div>
                </div>
        </Link>
        </FeatureWrapper>
    </div>
    
    );
}

export default GoodProduct;

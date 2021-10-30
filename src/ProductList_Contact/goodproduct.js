import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GoodProduct() {
    return (
        <div>
        <div className="card mb-3 postcard" style={{width: '420px'}}>
            <div className="row no-gutters">
                <div className="col-md-4 col-lg-4">
                    <img src="https://vietthuongshop.vn/upload/content/images/Tuvan/2019/7-2019/mau1-dan-piano-dien-casio-cdp-s100.jpg" alt="advertise" className="card-img-left"/>
                </div>
                    <div className="col-md-8 col-lg-8">
                    <div className="card-body d-flex flex-row-reverse justify-content-center">
                    <h4 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                    </div>
            </div>
        </div>
    </div>
    <div className="card mb-3 postcard" style={{width: '420px'}}>
            <div className="row no-gutters">
                <div className="col-md-4 col-lg-4">
                    <img src="https://pianoart.vn/wp-content/uploads/2019/10/web-01-1.png" alt="advertise" className="card-img-left"/>
                </div>
                    <div className="col-md-8 col-lg-8">
                    <div className="card-body d-flex flex-row-reverse justify-content-center">
                    <h4 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                    </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default GoodProduct;
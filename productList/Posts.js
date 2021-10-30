import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Post() {
    return (
        <div>
        <div className="card mb-3 postcard" style={{width: '420px'}}>
            <div className="row no-gutters">
                <div className="col-md-4 col-lg-4">
                    <img src="https://iotcdn.oss-ap-southeast-1.aliyuncs.com/2018-01/83105515-dizain-advertising.jpg" alt="advertise" className="card-img-left"/>
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
                    <img src="https://userscontent2.emaze.com/images/1013f41f-4583-489e-b108-3ba1d9e28b0a/45f6f19807348a30d3b0fbfa6ce8605f.jpg" alt="advertise" className="card-img-left"/>
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

export default Post;
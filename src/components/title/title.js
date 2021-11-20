import React from "react";
import { useLocation } from 'react-router-dom';
export default function Title({ title, img }) {
    var currentRoutes = useLocation();
    if (currentRoutes.pathname === '/product_list') {
        return (
            <>
                <div className="row">
                    <div className="col-12 mx-auto my-2 text-title">
                        <h1 className="text-capitalize">
                            <strong>{title}</strong>
                        </h1>
                    </div>
                </div>
                <div className="row title-img">
                    <div className="col-12"><img src={img} alt="banner" /></div>
                </div>
            </>
        )
    }
    else {
        return (
            <div className="row">
                <div className="col-12 mx-auto my-2 text-title">
                    <h1 className="text-capitalize">
                        <strong>{title}</strong>
                    </h1>
                </div>
                <div className="row title-img">
                    <div className="col-12"><img src="https://b.kisscc0.com/20180705/stq/kisscc0-musical-note-music-download-free-music-staff-musical-staff-5b3dc8bc1b1689.621763281530775740111.png" alt="banner" /></div>
                </div>
            </div>
        )
    }
}
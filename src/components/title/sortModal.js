import React from "react";
import { Consumer } from "../products/content";
import { useLocation } from 'react-router-dom';

export default function SortModal() {
    var currentRoutes = useLocation();
    return (
        <Consumer>
            {(value) => {
                if (!value.modalOpen) {
                    return null;
                }
                else if (currentRoutes.pathname === '/product' || currentRoutes.pathname === '/product_list') {
                    return (
                        <div className="container sort-modal">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <button className="btn btn-outline-secondary" onClick={() => { value.sortProducts("a-z"); value.closeModal("sort") }}>Tên a-z</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button className="btn btn-outline-secondary" onClick={() => { value.sortProducts("z-a"); value.closeModal("sort") }}>Tên z-a</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button className="btn btn-outline-secondary" onClick={() => { value.sortProducts("ascen"); value.closeModal("sort") }}>Giá thấp tới cao</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button className="btn btn-outline-secondary" onClick={() => { value.sortProducts("descen"); value.closeModal("sort") }}>Giá cao tới thấp</button>
                                </div>
                            </div>
                        </div>
                    );
                }
            }}
        </Consumer>
    )
}
import React from "react";
import Select from 'react-select';
import styled from "styled-components";
import { Consumer } from "../products/content";
import { useLocation } from 'react-router-dom';

const Filterbar = styled.div`
    .container {
        position: relative;
        background-color: #333333;
        height: 40px;
    }
    .container .sort-btn {
        border: none;
        background-color: #333333 !important;
    }
    .container .sort-btn:hover {
        color: #ffdd00;
    }
`
export default function FilterBar() {
    const actions2 = [
        { label: "10 - 20 triệu", value: 1 },
        { label: "20 - 30 triệu", value: 2 },
        { label: "30 - 40 triệu", value: 3 }
    ];
    const actions3 = [
        { label: "Yamaha", value: 1 },
        { label: "Steins", value: 2 },
        { label: "Samick", value: 3 }
    ];
    var currentRoutes = useLocation();
    return (
        <Filterbar>
            <Consumer>
                {value => (
                    <div className="container">
                        <div className="row">
                            <div className="col-7 col-md-8 col-lg-10">
                                <div className="row">
                                    <div className="col-5 col-md-3 col-lg-2">
                                        <p className="search-text"><strong>Tìm theo</strong></p>
                                    </div>
                                    <div className="col-5 col-md-3 col-lg-2">
                                        <Select className="select-box" placeholder="Giá" options={actions2} />
                                    </div>
                                    <div className="col-5 col-md-3 col-lg-3">
                                        <Select className="select-box" placeholder="Thương hiệu" options={actions3} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 col-md-4 col-lg-2">
                                <button className="btn btn-secondary sort-btn"
                                    onClick={() => {
                                        if (value.modalOpen || (currentRoutes.pathname !== '/product' && currentRoutes.pathname !== '/product_list')) {
                                            value.closeSortModal();
                                        } else {
                                            value.openSortModal()
                                        }
                                    }}>
                                    Sắp xếp theo <i className="fas fa-angle-down" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Consumer>
        </Filterbar>
    )
}
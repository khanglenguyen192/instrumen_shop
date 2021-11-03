import React from "react";
import Select from 'react-select';
import styled from "styled-components";

const Filterbar = styled.div`
    .container {
        position: relative;
        background-color: #333333;
        height: 40px;
    }
`
export default class FilterBar extends React.Component {
    render() {
        const actions1 = [
            { label: "Theo tên A-Z", value: 1 },
            { label: "Theo tên Z-A", value: 2 },
            { label: "Theo giá giảm dần", value: 3 },
            { label: "Theo giá tăng dần", value: 4 }
        ];
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
        return (
            <Filterbar>
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-md-8 col-lg-10">
                            <div className="row">
                                <div className="col-5 col-md-3 col-lg-2">
                                    <p className="search-text"><strong>Tìm theo</strong></p>
                                </div>
                                <div className="col-5 col-md-3 col-lg-2">
                                    <Select className="select-box" placeholder="Giá" options={ actions2 }/>
                                </div>
                                <div className="col-5 col-md-3 col-lg-2">
                                    <Select className="select-box" placeholder="Thương hiệu" options={ actions3 }/>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 col-md-4 col-lg-2">
                            <Select className="select-box" placeholder="Sắp xếp theo" options={ actions1 }/>
                        </div>
                    </div>
                </div>
            </Filterbar>
        )
    }
}
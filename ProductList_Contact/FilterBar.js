import React from "react";
import Select from 'react-select';
export default class FilterBar extends React.Component {
    render() {
        const actions = [
            { label: "Theo tên A-Z", value: 1 },
            { label: "Theo tên Z-A", value: 2 },
            { label: "Theo giá giảm dần", value: 3 },
            { label: "Theo giá tăng dần", value: 4 }
        ];
        return (
            <div className="col filterBar">
               <div className="container">
                    <div className="row">
                        <div className="col-9 col-md-5 col-lg"></div>
                        <div className="col-5 col-md-4 col-lg-2">
                            <Select  placeholder="Sắp xếp theo" options={ actions }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
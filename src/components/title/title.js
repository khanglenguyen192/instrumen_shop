import React from "react";

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-title">
                <h1 className="text-capitalize">
                    <strong>{title}</strong>
                </h1>
            </div>
        </div>
    )
}

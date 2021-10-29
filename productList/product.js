import React, { Component } from "react";
import styles from "styled-components";
import { Link } from 'react-router-dom';
import { StarRating } from './StarRating';

const ProductWrapper = styles.div`

`
export default class Product extends Component {
    render() {
        const { id, title, img, price } = this.props.product;
        return (
            <ProductWrapper className="col-8 col-md-5 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <Link to="/">
                            <img src={img} alt="products" className="card-img-top" id={id}/>
                        </Link>
                        <button className="cart-btn btn btn-primary btn-lg">Add to cart</button>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <ul className="list-group list-group-flush text-center">
                            <StarRating value={3} />
                            <Link to="/">
                            <li className="list-group-item"><p className="align-self-center mb-0">{title}</p></li>
                            </Link>
                            <li className="list-group-item"><h5 className="font-italic mb-0">{price}</h5></li>
                        </ul>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}
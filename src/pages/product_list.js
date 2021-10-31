import React, { Component } from "react";
import Title from "../components/title/title";
import { productList } from "../components/products/data";
import { Consumer } from "../components/products/content";
import Product from "../components/products/product";
import FilterBar from "../components/title/FilterBar";
import '../ProductStyle/ProductListStyle.css'

export default class ProductList extends Component {
  state = {
    products: productList
  }
  render() {
    return (
      <React.Fragment>
          <Title title="piano" />
          <div className="container">
            <div className="row">
              <FilterBar />
            </div>
            <div className="row">
              <Consumer>
                {value => {
                  console.log(value);
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </Consumer>
                </div>
              </div>
      </React.Fragment>
    )
  }
}
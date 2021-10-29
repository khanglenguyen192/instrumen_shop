import React, { Component } from "react";
import Title from "./title";
import { productList } from "./data";
import { Consumer } from "./content";
import Product from "./product";
import FilterBar from "./FilterBar";
export default class ProductList extends Component {
  state = {
    products: productList
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <Title title="piano" />
          <div className="container">
            <div className="row">
              <FilterBar />
            </div>
            <div className="row">
              <Consumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </Consumer>
                </div>
              </div>
        </div>
      </React.Fragment>
    )
  }
}
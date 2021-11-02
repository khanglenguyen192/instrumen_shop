import React, { Component } from "react";
import Product from "../components/products/product";
import { Consumer } from "../components/homeComponents/homeContext";
import { homePianoList } from "../data/HomePage/piano_data";
import { homeGuitarList } from "../data/HomePage/guitar_data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ListWrapper,
  ListTitle,
} from "../components/homeComponents/homePageElements";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default class Home extends Component {
  state = {
    piano_products: homePianoList,
    guitar_products: homeGuitarList,
  };

  render() {
    return (
      <>
        <div className="container">
          <ListWrapper class="product">
            <ListTitle>Piano</ListTitle>
            <div className="row">
              <Carousel responsive={responsive}>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
              </Carousel>
            </div>
          </ListWrapper>
          <ListWrapper class="product">
            <ListTitle>Piano</ListTitle>
            <div className="row">
              <Carousel responsive={responsive}>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.guitar_products.at(0)} />
                </div>
              </Carousel>
            </div>
          </ListWrapper>
        </div>
      </>
    );
  }
}

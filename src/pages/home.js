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
  AdContainer,
  AdContainerRow,
} from "../components/homeComponents/homePageElements";
import ad1 from "../images/ad1.png";
import ad2 from "../images/ad2.png";
import ad3 from "../images/ad3.png";
import ad4 from "../images/ad4.jpg";

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
          <AdContainer>
            <AdContainerRow>
              <div className="col">
                <img src={ad1} style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="col">
                <img src={ad1} style={{ width: "100%", height: "100%" }} />
              </div>
            </AdContainerRow>
            <AdContainerRow>
              <div className="col">
                <img src={ad1} style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="col">
                <img src={ad1} style={{ width: "100%", height: "100%" }} />
              </div>
            </AdContainerRow>
          </AdContainer>
          <ListWrapper>
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
            <ListTitle>Guitar</ListTitle>
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

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
  ListBtn,
  ListTitleRow,
  AdImage,
} from "../components/homeComponents/homePageElements";

const ad1 =
  "https://carpentersmusic.com/wp-content/uploads/2021/06/Carpenters-Promo-June-2021.jpg";
const ad2 =
  "https://carpentersmusic.com/wp-content/uploads/2021/02/Carpenters-Peavey-Promo2-a.png";
const ad3 =
  "https://carpentersmusic.com/wp-content/uploads/2020/07/Showroom-with-Logo2.jpg";
const ad4 =
  "https://carpentersmusic.com/wp-content/uploads/2019/07/services.png?resize=1024%2C550&ssl=1";

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
                <AdImage src={ad1} style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="col">
                <AdImage src={ad2} style={{ width: "100%", height: "100%" }} />
              </div>
            </AdContainerRow>
            <AdContainerRow>
              <div className="col">
                <img src={ad3} style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="col">
                <img src={ad4} style={{ width: "100%", height: "100%" }} />
              </div>
            </AdContainerRow>
          </AdContainer>
          <ListWrapper>
            <ListTitleRow>
              <ListTitle>Sản phẩm nổi bật</ListTitle>
              <ListBtn to="/">Xem thêm</ListBtn>
            </ListTitleRow>
            <div className="row">
              <Carousel responsive={responsive}>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
              </Carousel>
            </div>
          </ListWrapper>
          <ListWrapper class="product">
            <ListTitleRow>
              <ListTitle>Piano</ListTitle>
              <ListBtn to="/">Xem thêm</ListBtn>
            </ListTitleRow>
            <div className="row">
              <Carousel responsive={responsive}>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(1)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(2)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(3)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
                <div>
                  <Product product={this.state.piano_products.at(0)} />
                </div>
              </Carousel>
            </div>
          </ListWrapper>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import ProductListSlide from '../homeComponents/productListSlide/productListSlide';
import { homeGuitarList } from "../../data/HomePage/guitar_data";
import {Container} from './SimilarProductsElement';
export default function SimilarProducts() {
  return (
  <Container>
  <ProductListSlide title='Similar Products' dataList={homeGuitarList} />
  </Container>
  );
}


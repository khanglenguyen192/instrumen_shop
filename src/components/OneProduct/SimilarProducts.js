import React from "react";
import ProductListSlide from '../homeComponents/productListSlide/productListSlide';
import { homeGuitarList } from "../../data/HomePage/guitar_data";
export default function SimilarProducts(props) {
  return (
  <div className="container">
  <ProductListSlide title='Similar Products' dataList={props.dataList} />
  </div>
  );
}


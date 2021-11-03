import React from "react";
import Description from "../components/OneProduct/Description";
import Display from '../components/OneProduct/Display'
import ReviewContainer from "../components/OneProduct/Review";
import SimilarProducts from "../components/OneProduct/SimilarProducts";
import { homeGuitarList } from "../data/HomePage/guitar_data";

const ProductInfo = () => {
  return (
    <div>
      <Display display= {homeGuitarList[1]}
      />
      <Description description= {homeGuitarList[1]} />   
      <ReviewContainer />
      <SimilarProducts />
    </div>
  );
};

export default ProductInfo;

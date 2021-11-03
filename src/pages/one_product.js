import React from "react";
import Description from "../components/OneProduct/Description";
import Display from '../components/OneProduct/Display'
import ReviewContainer from "../components/OneProduct/Review";
import SimilarProducts from "../components/OneProduct/SimilarProducts";
import { homeGuitarList } from "../data/HomePage/guitar_data";

const ProductInfo = () => {
  return (
    <div>
      <Display
      src={homeGuitarList[0].img}
      name={homeGuitarList[0].title}
      price={homeGuitarList[0].price}
      />
      <Description/>
     
      <ReviewContainer />

      <SimilarProducts />

     

    </div>
  );
};

export default ProductInfo;

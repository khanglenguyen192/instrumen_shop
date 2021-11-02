import React from "react";
import Description from "../components/OneProduct/Description";
import Display from '../components/OneProduct/Display'
import ReviewContainer from "../components/OneProduct/Review";
import SimilarProducts from "../components/OneProduct/SimilarProducts";

const ProductInfo = () => {
  return (
    <div>
      <Display
      src='https://goodpiano.vn/upload/sanpham/adonisagw4015acousticguitarnaturalhighqualitypaddedguitargitaloha160415gitaloha1231_1499860431.jpg'
      name='Guitar Fender G3321'
      price='100000VND'
      />
      <Description/>
     
      <ReviewContainer />
      <SimilarProducts/>


    </div>
  );
};

export default ProductInfo;

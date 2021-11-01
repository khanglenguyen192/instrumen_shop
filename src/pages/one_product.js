import React from "react";
import Description2 from "../OneProduct/Description";
import Display from '../OneProduct/Display'
import ReviewContainer from "../OneProduct/Review";

const ProductInfo = () => {
  return (
    <div>
      <Display
      src='https://goodpiano.vn/upload/sanpham/adonisagw4015acousticguitarnaturalhighqualitypaddedguitargitaloha160415gitaloha1231_1499860431.jpg'
      name='Guitar Fender G3321'
      price='100000VND'
      />
      <Description2/>
      <ReviewContainer />
      <p style={{height: '300px', padding: '50px'}}>Similar product</p>

    </div>
  );
};

export default ProductInfo;

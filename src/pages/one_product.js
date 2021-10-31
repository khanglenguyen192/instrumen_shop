import React from "react";
import Description from "../OneProduct-StoreInfo/Description";
import Display from '../OneProduct-StoreInfo/Display'
import ReviewContainer from "../OneProduct-StoreInfo/Review";

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
      <p style={{height: '300px', padding: '50px'}}>Similar product</p>

    </div>
  );
};

export default ProductInfo;

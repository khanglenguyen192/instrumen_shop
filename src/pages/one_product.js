import React, {useState, useEffect} from "react";
import Description from "../components/OneProduct/Description";
import Display from '../components/OneProduct/Display'
import ReviewContainer from "../components/OneProduct/Review";
import SimilarProducts from "../components/OneProduct/SimilarProducts";
import { homeGuitarList } from "../data/HomePage/guitar_data";
import {withRouter} from 'react-router-dom';
import { featureProd } from "../data/ProductData/feature_products";
import Axios from 'axios';

const ProductInfo = (props) => {

  const id = props.match.params.id;
  
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(id);
  console.log(loading);
  useEffect(() => {
    fetchData();
    console.log('fetched data');
  }, [])

  function fetchData(){
    Axios.get('http://localhost:5000/api/one-product/details', {
      params: {
        id: id}
      }).then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(true);
        console.log('data sent');
        console.log(product);
  })
}

  return (
    loading? <div>
      <Display display= {product[0]}
      />
      <Description description= {product[0]} />   
      <ReviewContainer />
      <SimilarProducts />
    </div> : ''
  );
};

export default withRouter(ProductInfo);

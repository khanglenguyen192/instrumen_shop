import React, {useState, useEffect} from "react";
import Description from "../components/OneProduct/Description";
import Display from '../components/OneProduct/Display'
import ReviewContainer from "../components/OneProduct/Review";
import SimilarProducts from "../components/OneProduct/SimilarProducts";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

const ProductInfo = (props) => {

  const id = props.match.params.id;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedBack] = useState([]);

  useEffect( () => {
     fetchFeedBack();
     fetchData();
  }, [])
 
  
  const fetchFeedBack = () => {
    axios.get('http://localhost:5000/products/details/feedback', {
      params: {
        id: id}
      }).then((response) => {
      setFeedBack(response.data);
    }).catch(e => {
      console.log(e);
    });
  }

  const fetchData = () => {
    axios.get('http://localhost:5000/products/details', {
      params: {
        id: id}
      }).then((response) => {
      setProduct(response.data[0]);
    }).then(() => setLoading(false)).catch(e => {
      console.log(e);
    });
  }


  return (
    loading ? (<h1 style={{minHeight: '100vh', textAlign:'center', marginTop:'30vh'}}>LOADING....</h1>) : (<div>
      <Display display= {product}
      />
      <Description description= {product} />   
      <ReviewContainer feedback={feedback}/>
      <SimilarProducts />
    </div>)
  );
};

export default withRouter(ProductInfo);

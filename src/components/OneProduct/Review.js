import {ReviewContainer, Review,  RatingContainer, RatingItem} from './ReviewElement';
import Person from './Person';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {NormalBtn} from './DisplayElement';
import ReactPaginate from 'react-paginate';
import './review.css';
import axios from 'axios';

function Items({ currentItems }) {
  return (
    <div className="items" style={{width: '1000px'}}>
    {currentItems && currentItems.map((item) => (
      <div>
        <OneReview name = {item.customer_name} detail ={item.detail} rating={4}/>
      </div>
    ))}
      </div>
  );
}

function PaginatedItems({ feedback, itemsPerPage }) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => { 
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(feedback.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(feedback.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % feedback.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems}/>
      
      <div className='container' style={{marginTop: '30px', paddingLeft:'600px', position: 'absolute', bottom:'10px'}}>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </div>
    
    </>
  );
}

  function OneReview(props){
    const rating = Array(props.rating).fill(0);
   
    return (
      
      <Review>
      <div style={{display: 'inline-block', width: '200px'}}>
      <Person name={props.name}/>
      </div>
      <div style={{display: 'inline-block', marginLeft: '30px'}}>
      <div>
        {
           rating.map((_, index) => {
            return (
              <FaStar key={index} 
              size = {20}
              color= 'orange'/>
            )
          })
        }
      </div>
      <div style={{marginTop: '10px'}}>{props.detail}</div>
      </div>
    </Review>
  
    );
  }

  function Rating(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [detail, setDetail] = useState('');

    const [hoverValue, setHoverValue] = useState(0);
    const [curValue, setCurValue] = useState(0);
    const stars = Array(5).fill(0);

    const handleStarClick = (value) => {
      setCurValue(value);
      setRating(value);
    }

    const handleStarMouseOver = (value) => {
      setHoverValue(value);
    }

    const handleStarMouseLeave = () => {
      setHoverValue(0);
    }

    const nameOnChange = (e) =>{
      setName(e.target.value);
    }

    const emailOncChange = (e) =>{
      setEmail(e.target.value);

    }

    const detailOnChange = (e) => {
      setDetail(e.target.value);
    }

    const getCurrentTime = () => {
      var today = new Date();
      var cur_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var cur_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return (cur_date + ' ' + cur_time);
    }

    // add value here
    const handleSubmitClick = () => {

      if (name === '' || email === '' || rating === ''){
        return;
      }


      axios.post('http://localhost:5000/products/details/feedback', { 
        productID: props.id,
        customer_name: name,
        customer_email: email,
        detail: detail,
        rating: rating,
        time: getCurrentTime(),

      }).then((response) => {
      console.log(response.data);
    }).catch(e => {
      console.log(e);
    });
    }

    return <>
    <RatingContainer>
    <RatingItem>
    <h2>Viết nhận xét sản phẩm</h2>
    </RatingItem>

    <RatingItem>
      {stars.map((_, index) => {
        return (
          <FaStar key={index} 
          size = {40}
          color={(hoverValue || curValue) > index ? 'orange' : 'grey'} 
          onMouseOver={() => handleStarMouseOver(index + 1)} 
          onMouseLeave = {handleStarMouseLeave}
          onClick = {() => handleStarClick(index + 1)}/>
        )
      })}
    </RatingItem>

    <RatingItem>
    <lable style={{marginLeft: '10px'}}> Họ Tên </lable>
    <input style={{width: '300px', marginLeft: '10px'}} onChange={nameOnChange}/>
    <lable style={{marginLeft: '30px'}}> Email </lable>
    <input style={{width: '300px', marginLeft: '10px'}} onChange={emailOncChange}/>
    </RatingItem>
    <RatingItem>
    <textarea
        placeholder="Nhận xét sản phẩm"
        style={{width: '800px', height: '150px'}}
        onChange={detailOnChange}
      />
    </RatingItem>
    <RatingItem>
    <NormalBtn onClick={handleSubmitClick}> Submit </NormalBtn>
    </RatingItem>
    </RatingContainer>
    </>
  }

  function Reviews(props){
    return (
      <>
      <ReviewContainer>
        <div className='title' style={{backgroundColor: '#C4C4C4'}}>Đánh giá sản phẩm</div>
        {props.feedback.length === 0 ? <h2 style={{textAlign:'center', marginTop: '200px'}}>Không có đánh giá nào cho sản phẩm này</h2> : 
        <PaginatedItems itemsPerPage={4} feedback = {props.feedback}/>
  }
        </ReviewContainer>
        <Rating id= {props.id}/>
        </>
  );
  }
  
export default Reviews;
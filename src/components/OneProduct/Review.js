import {ReviewContainer, Review,  RatingContainer, RatingItem} from './ReviewElement';
import Person from './Person';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {NormalBtn} from './DisplayElement';
import ReactPaginate from 'react-paginate';
import { feedback } from '../../data/ProductData/feedback';
import './review.css'


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

function PaginatedItems({ itemsPerPage }) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => { 
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(feedback.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(feedback.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % feedback.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
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

  function Rating(){

    const [hoverValue, setHoverValue] = useState(0);
    const [curValue, setCurValue] = useState(0);
    const stars = Array(5).fill(0);

    const handleClick = (value) => {
      setCurValue(value);
    }

    const handleMouseOver = (value) => {
      setHoverValue(value);
    }

    const handleMouseLeave = () => {
      setHoverValue(0);
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
          onMouseOver={() => handleMouseOver(index + 1)} 
          onMouseLeave = {handleMouseLeave}
          onClick = {() => handleClick(index + 1)}/>
        )
      })}
    </RatingItem>

    <RatingItem>
    <lable style={{marginLeft: '10px'}}> Họ Tên </lable>
    <input style={{width: '300px', marginLeft: '10px'}}/>
    <lable style={{marginLeft: '30px'}}> Email </lable>
    <input style={{width: '300px', marginLeft: '10px'}}/>
    </RatingItem>
    <RatingItem>
    <textarea
        placeholder="Nhận xét sản phẩm"
        style={{width: '800px', height: '150px'}}
      />
    </RatingItem>
    <RatingItem>
    <NormalBtn> Submit </NormalBtn>
    </RatingItem>
    </RatingContainer>
    </>

  }

  function Reviews(){
    return (
      <>
      <ReviewContainer>
        <div className='title' style={{backgroundColor: '#C4C4C4'}}>Đánh giá sản phẩm</div>
        <PaginatedItems itemsPerPage={4}/>
        </ReviewContainer>
        <Rating />
        </>
  );
  }
  
export default Reviews;
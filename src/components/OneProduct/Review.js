import {Star} from './Star';
import {ReviewContainer, Review} from './ReviewElement';
import Person from './Person';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { RatingContainer, RatingItem } from './ReviewElement';
import {NormalBtn} from './DisplayElement';

function Reviews(){
    return (
      <>
      <ReviewContainer>
        <div className='title'>Đánh giá sản phẩm</div>
        <div className='rating' style={{backgroundColor: '#C4C4C4'}}>
        <p className='rating-num'>5.0</p>
        <Star value={5} />
        </div>
        <OneReview />
        <OneReview />
        <OneReview />
        </ReviewContainer>

        <Rating />
        </>
  );
  }
  
  function OneReview(){
    return (
      <Review>
      <Person />
      <span className='comment'>This is a comment</span>
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
    <h1>Viết nhận xét sản phẩm</h1>
    </RatingItem>

    <RatingItem>
      {stars.map((_, index) => {
        return (
          <FaStar key={index} 
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
  
export default Reviews;
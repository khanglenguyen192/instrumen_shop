import './Review.css'
import {Star} from './Star';
function ReviewContainer(){
    return (
      <div className="container_review">
        <div className='title'>Đánh giá sản phẩm</div>
        <div className='rating' style={{backgroundColor: '#C4C4C4'}}>
        <p>4.0</p>
        <Star value={4} />
        </div>
        <Review />
        <Review />
        <Review />
        <div style={{float: 'right'}}>
        <a href = "">Previous</a>
        <p style={{display: 'inline', margin: '0px 5px'}}> 2 </p>
        <a href = "">Next</a>
        </div>
      </div>
  );
  }
  
  function Review(){
    return (
      <div className='review'>
      <div className='cus-info'>
      <img className="cus-avartar" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkvHnw-e8xkeN27LPJn5JJvw4XbIgOM8OEw&usqp=CAU'/>
      <p>Customer name</p>
      </div>
      <p className='comment'>This is a comment</p>
    </div>
  
    );
  }
  
export default ReviewContainer;
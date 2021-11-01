import React from 'react';
import QuantityBox from './QuantityBox';
import './Display.css';


function ProInfo(props) {
  return (

    <React.Fragment> 
    <Url />

    <img className='pro_img' src = {props.src} alt='product img'/>;
    <div className="pro_info">
    <h1 className='pro_name'>{props.name}</h1>
    <p className='pro_price'>{props.price}</p>
   
    <p className='color-quantity-section'>Màu sắc</p>
    <Button className="color_btn" name="1"/>
    <Button className="color_btn" name="2"/>
    <Button className="color_btn" name="3"/>

    <p className='color-quantity-section'>Số lượng</p>
    <QuantityBox />
    <div className ='=normal_btn-container'>
    <Button className="normal_btn" name="Mua ngay"/>
    <Button className="normal_btn" name="Thêm vào giỏ hàng"/> 
    </div>
    </div>
    </React.Fragment>
 
  );
}

const Button = (props) => (<button className={props.className}>{props.name}</button>);
const Url = () =>(<p>This is url to product</p>);





export default ProInfo;

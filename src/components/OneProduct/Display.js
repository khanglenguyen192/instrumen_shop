import React, {useState} from 'react';
import QuantityBox from './QuantityBox';
import { Link } from "react-router-dom";
import {Container, ProImg, InfoSection, NormalBtn, BtnContainer} from './DisplayElement';
import PopUp from './PopUp';
import { AddToCart } from '../../pages/cart';

function ProInfo(props) {
   //url to product 

  const [addToCart, setAddToCart] = useState(false); 
  const [quantity, setQuantiy] = useState(1);
  const {id, img, name, price} = props.display;
  
  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++)
    {
      AddToCart({id: id, img: img, name: name, price: price})
    }
    setAddToCart(true);
  }

  const closePopUp = () => {
    setAddToCart(false);
  }

  const onDecrement = () => {
   if (quantity <= 1) return;
   setQuantiy(quantity - 1);
 }

 const onIncrement = () => {
  setQuantiy(quantity + 1);
}

  return (
    <React.Fragment> 
    <Container>
    <ProImg src = {img} alt='product img'/>
    <InfoSection>
    <h1 className='pro_name'>{name}</h1>
    <p className='pro_price'>{price} VND</p>

    <p className='quantity-section'>Số lượng</p>
    <QuantityBox qty={quantity} onDecrement={onDecrement} onIncrement={onIncrement}/>

    <BtnContainer>
    <NormalBtn > 
    <Link to='/payment' style={{ textDecoration: 'none', color: 'black' }}> Mua ngay </Link>
    </NormalBtn>
    <NormalBtn onClick={handleAddToCart}>Thêm vào giỏ hàng</NormalBtn>
    </BtnContainer>
    <PopUp trigger={addToCart} setTrigger={closePopUp}></PopUp>

    </InfoSection>
    </Container>
    </React.Fragment>
 
  );
}

export default ProInfo;

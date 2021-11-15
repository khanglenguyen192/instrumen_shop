import React, {useState} from 'react';
import QuantityBox from './QuantityBox';
import { Link } from "react-router-dom";
import {Container, ProImg, InfoSection, NormalBtn, ColorBtn, BtnContainer} from './DisplayElement';
import PopUp from './PopUp';
function ProInfo(props) {
  //url to product  

  const handleAddToCart = () => {
    setAddToCart(true);
  }

  const closePopUp = () => {
    setAddToCart(false);
  }

  const [addToCart, setAddToCart] = useState(false); 
  const {img, name, price} = props.display;
  return (
    <React.Fragment> 
    <Container>
    <ProImg src = {img} alt='product img'/>
    <InfoSection>
    <h1 className='pro_name'>{name}</h1>
    <p className='pro_price'>{price} VND</p>
   
    <p className='color-section'>Màu sắc</p>
    <ColorBtn style={{backgroundColor: '#333333'}} />
    <ColorBtn style={{backgroundColor: 'yellow'}} />
    <ColorBtn style={{backgroundColor: '#ffc107'}} />

    <p className='quantity-section'>Số lượng</p>
    <QuantityBox />

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

const Button = (props) => (<button className={props.className}>{props.name}</button>);

export default ProInfo;

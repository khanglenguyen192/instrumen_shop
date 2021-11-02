import React from 'react';
import QuantityBox from './QuantityBox';

import {Container, ProImg, InfoSection, NormalBtn, ColorBtn} from './DisplayElement';


function ProInfo(props) {
  //url to product
  
  return (
    <React.Fragment> 
    <Container>
    <ProImg src = {props.src} alt='product img'/>
    <InfoSection>
    <h1 className='pro_name'>{props.name}</h1>
    <p className='pro_price'>{props.price} VND</p>
   
    <p className='color-section'>Màu sắc</p>
    <ColorBtn style={{backgroundColor: '#333333'}} />
    <ColorBtn style={{backgroundColor: 'yellow'}} />
    <ColorBtn style={{backgroundColor: '#ffc107'}} />

    <p className='quantity-section'>Số lượng</p>
    <QuantityBox />
    <NormalBtn>Mua ngay</NormalBtn>
    <NormalBtn>Thêm vào giỏ hàng</NormalBtn>
    </InfoSection>
    </Container>
    </React.Fragment>
 
  );
}

const Button = (props) => (<button className={props.className}>{props.name}</button>);





export default ProInfo;

import piano from './piano_1.png';
import upIcon from './upArrow.svg';
import downIcon from './downArrow.svg';
import './CartPage.css';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';


function CartItem({item}){
    const [amount,SetAmount] = useState(1);
    function Number_Stepper(){
      function add(){
        SetAmount(amount+1);
        item.add();
      }
      function minus(){
        if(amount <= 1){}
        else {
        SetAmount(amount-1);
        item.minus();
        }
      }
      return (
        <div class="Num_Stepper">
          <div class="col-1">
            <div class="item">
            {item.props.amount}
            </div>
          </div>
          <div class="col-2">
            <input type="image"  id="Plus" src={upIcon} onClick={add}/>
            <input type="image"  id="Minus" src={downIcon} onClick={minus}/>
          </div>
        </div>
      )
    };
    return(
        <div class="row2">
            <div class="col1">
                <img src={piano}/>
            </div>
            <div class="col1">
                Đàn Piano Upright Yamaha
            </div>
            <div class="col1">
                {item.props.price}đ
            </div>
            <div class="col1">
                <Number_Stepper/>
            </div>
            <div class="col1">
                {item.props.price*item.props.amount}đ
            </div>
            <div class="col2">
                <input id="delete_button" type="button" value="Xóa"/>
            </div>
        </div>
    )
}

export default CartItem;
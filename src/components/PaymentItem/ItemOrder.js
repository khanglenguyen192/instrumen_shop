import React, {Component, useEffect} from "react";
import ButtonClick from "../PaymentItem/ButtonClick";
import { AddToCart } from '../../pages/cart';
import { useState } from 'react';



function ItemOrder() {

    const [ItemList,setItemList] = useState([]);
    const [Sum,SetSum] = useState(TinhTong());
    const [Name_product,SetName] = useState(Show_Product());
    useEffect(() => {
    const StoredItemList = localStorage.getItem('cart');
    if(StoredItemList) {
      setItemList(JSON.parse(StoredItemList));
    }
    }, [] );
    useEffect(() => {
      localStorage.setItem('cart',JSON.stringify(ItemList));
      update();
    }, [ItemList] );
    function update() {
    SetSum(TinhTong());
    localStorage.setItem('cart',JSON.stringify(ItemList));
  }
  function TinhTong() { //Tổng price trong giỏ hàng
    var sum = 0;
    for(let i = 0; i < ItemList.length; i++)
    {
      sum += ItemList[i].props.price*ItemList[i].props.amount;
    }
    return sum;
  }

    useEffect(() => {
      localStorage.setItem('cart',JSON.stringify(ItemList));
      updateName();
    }, [ItemList] );
  
  function updateName() {
    SetName(Show_Product());
    localStorage.setItem('cart',JSON.stringify(ItemList));
  }
  function Show_Product() {
    var name_product = '';
    for(let i = 0; i < ItemList.length; i++)
    {
      if(i == 0){
        name_product = name_product.concat(ItemList[i].props.name);
      }
      else name_product = name_product.concat('/ ', ItemList[i].props.name);
    }
    return name_product;
  }

    return (
        <div class="card bg-light text-dark">
            <div class="bg-warning text-white p-2">
                <h3 class="text-center">Đơn hàng</h3>
            </div>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Thành tiền</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {Name_product}
                    </td>
                    <td>{Sum}đ</td>
                </tr>
                
                <tr bgcolor="#edd5e0">
                    <td>Mã giảm giá</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Tổng</td>
                    <td>{Sum }đ</td>
                </tr>
                </tbody>
            </table>

            <div style={{"padding": "1.5px"}}>
                <h3>Chọn phương thức thanh toán</h3>
                <form>
                <select class="form-select form-select-lg">
                    <option >Thanh toán trực tiếp</option>
                    <option >Thanh toán online</option>
                </select>
                </form>    
            </div>

            <ButtonClick/>
        </div>
    )
}

export default ItemOrder

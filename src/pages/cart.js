import React, {Component, useEffect} from "react";
import "../components/CartItem/CartPage.css";
import { useState } from "react";
import CartItem from "../components/CartItem/CartItem";
import Title from "../components/title/title";
import { Link } from "react-router-dom";
import CartItemList from "../components/CartItem/CartItemList";
import axios from "axios";

export class ItemInCart extends React.Component{ //Lưu dữ liệu từng item
  constructor(props){
    super(props);
    this.props.amount = 1;
  }
}

export function AddToCart(props){ // Dùng ngoài component
  var temp = localStorage.getItem('cart');
  var temp2 = JSON.parse(temp);
  var Repeated = 0;
  for(let i = 0; i < temp2.length; i++)
  {
    if(temp2[i].props.id == props.id)
    {
      temp2[i].props.amount++;
      localStorage.setItem('cart',JSON.stringify(temp2));
      Repeated = 1;
    }
  }
  if (Repeated == 0) {
  temp2 = [...temp2, new ItemInCart({id: props.id, img: props.img, name: props.name,price: props.price})];
  localStorage.setItem('cart',JSON.stringify(temp2));
  }
}

const Cart = () => {
  const [ItemList,setItemList] = useState([]);
  const [Sum,SetSum] = useState(TinhTong());
  var Check = (ItemList.length == 0) ? true : false;
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
  function XoaHet() {
    setItemList([]);
    localStorage.setItem('cart',JSON.stringify(ItemList));
    SetSum(0);
  }
  function Xoa(id) {
    var temp = [];
    for (let i = 0; i < ItemList.length; i++) {
      if(ItemList[i].props.id != id){
        temp = [...temp, ItemList[i]];
      }
    }
    setItemList(temp);
    localStorage.setItem('cart',JSON.stringify(ItemList));
  }
  function empty(){
    alert('Chưa có hàng trong giỏ');
  }
  return (
    <div style={{ "min-height": "70vh" }}>
      <div class="container cartpage">
        <Title title="Giỏ hàng" />
        <div class="CartItem">
          <div class="row1">
            <div class="col1">Ảnh</div>
            <div class="col1">Sản phẩm</div>
            <div class="col1">Giá</div>
            <div class="col1">Số lượng</div>
            <div class="col1">Tổng</div>
          </div>
          <CartItemList ItemList={ItemList} update={update} Xoa={Xoa} />
          <div class="row3">
            <div class="group-1">
              <Link to="/home">
              <input id="button-1" type="button" value="Tiếp tục mua hàng" />
              </Link>
              <input id="button-1" type="button" value="Xóa hết" onClick={XoaHet}/>
              <input id="button-2" type="button" value="Cập nhật giỏ hàng" onClick={update}/>
            </div>
            <div class="group-2">
              <input placeholder="Nhập mã khuyến mãi" />
              <input id="apply" type="button" value="Áp dụng"/>
            </div>
          </div>
        </div>
        <div class="CartFooter">
          <div class="content">
            <div id="text">Cộng giỏ hàng</div>
            <div class="row1">
              <div class="col1"> Tổng đơn:</div>
              <div class="col2">{Sum}đ</div>
            </div>
            {!Check ?
            <Link to="/payment">
              <input type="button" value="Đặt hàng ngay"/>
            </Link>
            :<input type="button" value="Đặt hàng ngay" onClick={empty}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, {Component} from "react";
import "../components/CartItem/CartPage.css";
import { useState } from "react";
import CartItem from "../components/CartItem/CartItem";
import Title from "../components/title/title";
import { Link } from "react-router-dom";
import CartItemList from "../components/CartItem/CartItemList";
import { FaMinus } from "react-icons/fa";

class ItemInCart extends React.Component{
  constructor(props){
    super(props);
    this.props.amount = 1;
    this.add = this.add.bind(this);
    this.setState = this.setState.bind(this);
  }
  add() {
      this.props.amount++;
    }
  minus() {
      this.props.amount--;
    }
  }

const Cart = () => {
  var ItemList = [new ItemInCart({price: "1000"}),new ItemInCart({price: "1000"})];
  const [Sum,SetSum] = useState(TongTien());
  function TongTien(){
    var sum = 0;
    for (let i=0 ; i< ItemList.length;i++){
      sum += ItemList[i].props.price*ItemList[i].props.amount;
    }
    return sum;
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
          <CartItemList ItemList={ItemList} />
          <div class="row3">
            <div class="group-1">
              <input id="button-1" type="button" value="Tiếp tục mua hàng" />
              <input id="button-1" type="button" value="Xóa hết" />
              <input id="button-2" type="button" value="Cập nhật giỏ hàng" />
            </div>
            <div class="group-2">
              <input placeholder="Nhập mã khuyến mãi" />
              <input id="apply" type="button" value="Áp dụng" />
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
            <Link to="/payment">
              <input type="button" value="Đặt hàng ngay" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

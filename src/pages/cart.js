import React from "react";
import "../components/CartItem/CartPage.css";
import { useState } from "react";
import CartItem from "../components/CartItem/CartItem";
import Title from "../components/title/title";
import { Link } from "react-router-dom";

const Cart = () => {
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
          <CartItem price="2040000" />
          <CartItem price="2040000" />
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
              <div class="col2">5080000đ</div>
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

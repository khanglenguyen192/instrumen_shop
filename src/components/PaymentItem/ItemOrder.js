import React, {useEffect} from "react";
import ButtonClick from "../PaymentItem/ButtonClick";
import { useState } from 'react';



function ItemOrder(props) {

    const [ItemList,setItemList] = useState([]);
    const [Sum,SetSum] = useState(TinhTong());    

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

  const renderListProduct = ItemList.map((props, idx) => {//render list product
    return (
      <tr key={idx}>
        <td>{ItemList[idx].props.name}  (x{ItemList[idx].props.amount})</td>
        <td>{ItemList[idx].props.price * ItemList[idx].props.amount}</td>
      </tr>
    );
  });

    return (
        <div class="card bg-light text-dark">
            <div class="bg-warning text-white p-2">
                <h3 class="text-center">Đơn hàng</h3>
            </div>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Sản phẩm  (SL)</th>
                    <th>Thành tiền</th>
                </tr>
                </thead>
                <tbody>

                  {renderListProduct}

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

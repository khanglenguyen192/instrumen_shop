import React from "react";
import CartItem from "./CartItem";

export default function CartItemList ( {ItemList} ){
    return(
        <>
        {
            ItemList.map( (item) => (<CartItem item = {item}/>))
        }
        </>
    );
}
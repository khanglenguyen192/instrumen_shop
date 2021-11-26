import {
  ProductMenuDropdownContainer,
  ProductMenuTitle,
  ProductMenuTitleWrapper,
  MenuIcon,
  DropdownList,
  DropdownMenuItem,
  DropdownMenuItemLogo,
  ItemLink,
} from "./ProductDropdownElements";
import { productType } from "../../../data/ProductData/productTypes"
import { Consumer } from "../../products/content";
import React from "react";
import axios from 'axios';

class ProductDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }
  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = () => {
    axios.get(`http://localhost:5000/category`)
      .then((response) => {
        const categoryList = response.data;
        this.setState(() => ({
          category: categoryList
        }))
        console.log(this.state.category)
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <ProductMenuDropdownContainer>
        <ProductMenuTitleWrapper>
          <MenuIcon className="fas fa-bars"></MenuIcon>
          <ProductMenuTitle>DANH MỤC SẢN PHẨM</ProductMenuTitle>
          <MenuIcon className="fas fa-caret-down"></MenuIcon>
        </ProductMenuTitleWrapper>
        <DropdownList id="product-menu-dropdown">
          <Consumer>
            {value => {
              return this.state.category.map(item => {
                return (
                  <DropdownMenuItem>
                    <ItemLink to="/product_list" onClick={() => { value.setProducts(item.categoryID); value.setTitle(item.categoryName); value.setTitleImg(item.titleImg); value.unSetFilterByPrice(); value.unSetIsProduct(); value.setBrand(); value.setCategoryID(item.categoryID) }}>
                      <DropdownMenuItemLogo src={item.categoryImg}></DropdownMenuItemLogo>
                      {item.categoryName}
                    </ItemLink>
                  </DropdownMenuItem>
                )
              })
            }}
          </Consumer>
        </DropdownList>
      </ProductMenuDropdownContainer>
    );
  }
};

export default ProductDropdown;

import React from "react";
import {
  ProductList,
  Nav,
  NavLink,
  NavIcon,
  NavMenu,
  NavBarContainer,
} from "./NavbarElements";
import { Consumer } from "../products/content";
import ProductDropdown from "../dropdown/product-dropdown";
const Navbar = () => {
  return (
    <NavBarContainer>
      <Nav>
        <ProductList>
          <ProductDropdown />
        </ProductList>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            <NavIcon className="fas fa-home"></NavIcon>
          </NavLink>
          <NavLink to="/introduction" activeStyle>
            Giới thiệu
          </NavLink>
          <Consumer>
            {value => (<NavLink to="/product" onClick={() => { value.setTitle("Sản phẩm"); value.setIsProduct(); value.unSetFilterByPrice(); value.destructLocalStorage(); value.setBrand() }} activeStyle>
              Sản phẩm
            </NavLink>)}
          </Consumer>
          <NavLink to="/services" activeStyle>
            Dịch vụ
          </NavLink>
          <NavLink to="/posts" activeStyle>
            Bài viết
          </NavLink>
          <NavLink to="/promotion" activeStyle>
            Khuyến mãi
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Liên hệ
          </NavLink>
          <NavLink to="/installment" activeStyle>
            Trả góp
          </NavLink>
        </NavMenu>
      </Nav>
    </NavBarContainer>
  );
};

export default Navbar;

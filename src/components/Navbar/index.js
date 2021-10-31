import React from "react";
import {
  ProductList,
  Nav,
  NavLink,
  Bars,
  NavIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import ProductDropdown from "../dropdown/product-dropdown";

const Navbar = () => {
  return (
    <>
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
          <NavLink to="/product_list" activeStyle>
            Sản phẩm
          </NavLink>
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
        {/* <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;

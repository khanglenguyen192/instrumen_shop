import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #333333;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((70vw - 1000px) / 2);
  z-index: 10;
`;

export const Logo = styled.div`
  padding: 0;
  width: 350px;
`;

export const NavLogo = styled(Link)`
  padding: 0px 0px 0px 0px;
  border-style: solid;
  border-color: #0589f3;
  border-radius: 10px;
  width: 220px;
  margin: 0;
  color: #0589f3;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    width: 110px;
  }
`;

export const LogoName = styled.p`
  color: #0589f3;
  font-size: 36px;
  font-weight: bold;
  margin-left: -10px;
`;

export const ShopName = styled.p`
  color: #0589f3;
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: -10px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  //   &:hover {
  //     color: #ff9c00;
  //     transition: 200ms ease-in;
  //   }
`;

export const NavMenu = styled.div`
  display: flex;
  //margin-left: 20px;
  align-items: center;
`;

export const NavLinkText = styled.h5`
  color: #fff;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavIcon = styled.i`
  font-size: 28px;
  margin-right: 10px;
`;

export const NavCart = styled.i`
  font-size: 18px;
  margin-right: 10px;
`;

export const SearchNav = styled.nav`
  height: 50px;
  display: flex;
  margin-top: 10px;
  z-index: 10;
  width: 100%;
  float: left;
  position: relative;
  width: 688px;
  height: 40px;
`;

export const SearchInput = styled.input`
  color: #000;
  width: 100%;
  height: 100%;
  float: left;
  border: 0;
  background: #fff;
  font-size: 16px;
  border-radius: 10px;
  height: 40px;
  padding: 10px;
`;

export const SearchBtn = styled.button`
    height: 100%;
    width: 100%
    font-size: 12px;
    right: 0;
    position: absolute;
    width: 110px;
    height: 40px;
    background: #0589F3;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0;

    @media screen and (max-width: 1100px) {
        width: 50px;
    }
`;

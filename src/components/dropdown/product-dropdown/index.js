import React, { useState } from "react";
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

const imgPiano =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/027-piano.svg";
const imgOrgan =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/034-organ.svg";
const imgGuitar =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/015-electric-guitar.svg";
const imgUkulele =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/022-guitar.svg";
const imgViolin =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/018-violin.svg";
const imgDrum =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/038-drums.svg";
const imgAmplifier =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/008-amplifier.svg";
const imgSoundDevice =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/019-speaker.svg";
const imgWindInstrument =
  "https://nhaccutienmanh.vn/wp-content/themes/nhaccutienmanh/images/icon-cat/016-flute.svg";

const ProductDropdown = () => {
  return (
    <ProductMenuDropdownContainer>
      <ProductMenuTitleWrapper>
        <MenuIcon className="fas fa-bars"></MenuIcon>
        <ProductMenuTitle>DANH MỤC SẢN PHẨM</ProductMenuTitle>
        <MenuIcon className="fas fa-caret-down"></MenuIcon>
      </ProductMenuTitleWrapper>
      <DropdownList id="product-menu-dropdown">
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgPiano}></DropdownMenuItemLogo>
            Đàn Piano
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgOrgan}></DropdownMenuItemLogo>
            Đàn Organ
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgGuitar}></DropdownMenuItemLogo>
            Đàn Guitar
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgUkulele}></DropdownMenuItemLogo>
            Đàn Ukulele
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgViolin}></DropdownMenuItemLogo>
            Đàn Violin
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgDrum}></DropdownMenuItemLogo>
            Trống
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgAmplifier}></DropdownMenuItemLogo>
            Amplifier
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo src={imgSoundDevice}></DropdownMenuItemLogo>
            Âm thanh
          </ItemLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ItemLink to="/">
            <DropdownMenuItemLogo
              src={imgWindInstrument}
            ></DropdownMenuItemLogo>
            Nhạc cụ hơi
          </ItemLink>
        </DropdownMenuItem>
      </DropdownList>
    </ProductMenuDropdownContainer>
  );
};

export default ProductDropdown;

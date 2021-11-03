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
import { productList } from "../../../data/ProductData/pianoProdData";
import { homeGuitarList } from "../../../data/ProductData/guitar_data";
import { organData } from "../../../data/ProductData/organe_data";
import { ukuleleData } from "../../../data/ProductData/ukulele_data";
import { violinData } from "../../../data/ProductData/violin_data";
import { drumData } from "../../../data/ProductData/drum_data";
import { amplifierData } from "../../../data/ProductData/amplifier_data";
import { soundData } from "../../../data/ProductData/sound_data";
import { fluteData } from "../../../data/ProductData/flute_data";
import { Consumer } from "../../products/content";
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
          <Consumer>
            {value =>
            (<ItemLink to="/product_list" onClick={() => { value.setProducts(productList); value.setTitle("piano") }}>
                <DropdownMenuItemLogo src={imgPiano}></DropdownMenuItemLogo>
                Đàn Piano
            </ItemLink>
            )}
            </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
            {value =>
            (<ItemLink to="/product_list" onClick={() => { value.setProducts(organData);value.setTitle("organ") }}>
            <DropdownMenuItemLogo src={imgOrgan}></DropdownMenuItemLogo>
            Đàn Organ
            </ItemLink>
            )}
          </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
          {value =>
          (<ItemLink to="/product_list" onClick={() => { value.setProducts(homeGuitarList);value.setTitle("guitar") }}>
            <DropdownMenuItemLogo src={imgGuitar}></DropdownMenuItemLogo>
            Đàn Guitar
            </ItemLink>
            )}
          </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
          {value =>
          (
          <ItemLink to="/product_list" onClick={() => { value.setProducts(ukuleleData);value.setTitle("ukulele") }}>
            <DropdownMenuItemLogo src={imgUkulele}></DropdownMenuItemLogo>
            Đàn Ukulele
          </ItemLink>
          )}
          </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
          {value =>
          (
          <ItemLink to="/product_list" onClick={() => { value.setProducts(violinData);value.setTitle("violin") }}>
            <DropdownMenuItemLogo src={imgViolin}></DropdownMenuItemLogo>
            Đàn Violin
          </ItemLink>
          )}
          </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
          {value =>
          (
          <ItemLink to="/product_list"  onClick={() => {value.setProducts(drumData);value.setTitle("trống")}}>
            <DropdownMenuItemLogo src={imgDrum}></DropdownMenuItemLogo>
            Trống
          </ItemLink>
          )}
          </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
          {value =>
          (
          <ItemLink to="/product_list" onClick={() => {value.setProducts(amplifierData);value.setTitle("amplifier")}}>
            <DropdownMenuItemLogo src={imgAmplifier}></DropdownMenuItemLogo>
            Amplifier
          </ItemLink>
          )}
          </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
          {value =>
          (
          <ItemLink to="/product_list" onClick={() => {value.setProducts(soundData);value.setTitle("âm thanh")}}>
            <DropdownMenuItemLogo src={imgSoundDevice}></DropdownMenuItemLogo>
            Âm thanh
          </ItemLink>
          )}
          </Consumer>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Consumer>
          {value =>
          (
          <ItemLink to="/product_list" onClick={() => {value.setProducts(fluteData);value.setTitle("nhạc cụ hơi")}}>
            <DropdownMenuItemLogo
              src={imgWindInstrument}
            ></DropdownMenuItemLogo>
            Nhạc cụ hơi
          </ItemLink>
          )}
          </Consumer>
        </DropdownMenuItem>
      </DropdownList>
      </ProductMenuDropdownContainer>
  );
};

export default ProductDropdown;

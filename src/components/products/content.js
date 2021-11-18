import React, { Component } from "react";
import parseNumber from "./parseNumber";
import { priceTag } from "./../../data/ProductData/priceTags"
import { productType } from "../../data/ProductData/productTypes";
import axios from 'axios';
const Context = React.createContext();

let productsAPI = `http://localhost:5000/products`;
let categoryAPI = `http://localhost:5000/category`;


class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsByCategory: [],
      productsFilterByPrice: [],
      modalOpen: false,
      filterBrandModal: false,
      filterPriceModal: false,
      filterPrice: false,
      isProduct: false,
      productType: productType[0]
    };
  }


  componentDidMount() {
    axios.get(`http://localhost:5000/products`)
      .then((response) => {
        const productsList = response.data;
        this.setState(() => ({
          products: productsList
        }))
        console.log(this.state.products);
      })
      .catch(e => {
        console.log(e);
      });
  }


  setProducts = (category) => {
    let tempProducts = this.state.products;
    let productsByCategory = tempProducts.filter(product => product.category === category);
    this.setState({
      productsByCategory: productsByCategory
    })
  }

  setProductType = (data) => {
    this.setState({
      productType: data
    })
  }

  openModal = (type) => {
    if (type === "sort") {
      this.setState(() => {
        return { modalOpen: true };
      })
    }
    else if (type === "brand") {
      this.setState(() => {
        return { filterBrandModal: true };
      })
    } else if (type === "price") {
      this.setState(() => {
        return { filterPriceModal: true };
      })
    }
  }

  closeModal = (type) => {
    if (type === "sort") {
      this.setState(() => {
        return { modalOpen: false };
      })
    }
    else if (type === "brand") {
      this.setState(() => {
        return { filterBrandModal: false };
      })
    } else if (type === "price") {
      this.setState(() => {
        return { filterPriceModal: false };
      })
    }
  }

  setFilterByPrice = () => {
    this.setState({
      filterPrice: true
    })
  }

  unSetFilterByPrice = () => {
    this.setState({
      filterPrice: false
    })
  }

  setIsProduct = () => {
    this.setState({
      isProduct: true
    })
  }

  unSetIsProduct = () => {
    this.setState({
      isProduct: false
    })
  }

  sortProducts = (type) => {
    let tempProducts = [];
    let tempProductsByCategory = [];
    let tempProductsFilterByPrice = [];

    this.state.productsByCategory.forEach(item => {
      const it = { ...item };
      tempProductsByCategory = [...tempProductsByCategory, it];
    });
    this.state.products.forEach(item => {
      const it = { ...item };
      tempProducts = [...tempProducts, it];
    });
    this.state.productsFilterByPrice.forEach(item => {
      const it = { ...item };
      tempProductsFilterByPrice = [...tempProductsFilterByPrice, it];
    });
    if (type === "a-z") {
      tempProductsByCategory.sort((a, b) => a.name.localeCompare(b.name));
      tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      tempProductsFilterByPrice.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "z-a") {
      tempProductsByCategory.sort((a, b) => b.name.localeCompare(a.name));
      tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      tempProductsFilterByPrice.sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === "ascen") {
      tempProductsByCategory.sort((a, b) => (a.price - b.price));
      tempProducts.sort((a, b) => (a.price - b.price));
      tempProductsFilterByPrice.sort((a, b) => (a.price - b.price));
    } else if (type === "descen") {
      tempProductsByCategory.sort((a, b) => (b.price - a.price));
      tempProducts.sort((a, b) => (b.price - a.price));
      tempProductsFilterByPrice.sort((a, b) => (b.price - a.price));
    }

    this.setState({
      productsByCategory: tempProductsByCategory,
      products: tempProducts,
      productsFilterByPrice: tempProductsFilterByPrice
    })
  }

  filterByBrand = async (brand, data) => {
    await this.setProducts(data);
    console.log(brand);
    const tempProducts = this.state.products.filter((item) => {
      return !item.brand.localeCompare(brand);
    });

    this.setState({
      products: tempProducts
    })
  }

  filterByPrice = async (priceIndex) => {
    let tempProducts = [];
    if (this.state.isProduct) {
      tempProducts = this.state.products.filter((item) => {
        return (item.price >= priceTag[priceIndex].value[0] && item.price < priceTag[priceIndex].value[1]);
      });
    }
    else {
      tempProducts = this.state.productsByCategory.filter((item) => {
        return (item.price >= priceTag[priceIndex].value[0] && item.price < priceTag[priceIndex].value[1]);
      });
    }
    this.setState({
      productsFilterByPrice: tempProducts
    })
  }

  setTitle = (title, img) => {
    this.setState({
      category: title,
      titleImg: img
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          setProducts: this.setProducts,
          setTitle: this.setTitle,
          sortProducts: this.sortProducts,
          openModal: this.openModal,
          closeModal: this.closeModal,
          filterByBrand: this.filterByBrand,
          setProductType: this.setProductType,
          filterByPrice: this.filterByPrice,
          fetchProducts: this.fetchProducts,
          setFilterByPrice: this.setFilterByPrice,
          unSetFilterByPrice: this.unSetFilterByPrice,
          setIsProduct: this.setIsProduct,
          unSetIsProduct: this.unSetIsProduct
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };

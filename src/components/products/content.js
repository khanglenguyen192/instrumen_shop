import React, { Component } from "react";
import { priceTag } from "./../../data/ProductData/priceTags"
import { productType } from "../../data/ProductData/productTypes";
import { useLocation } from "react-router";
import axios from 'axios';

const Context = React.createContext();

const GetLocation = () => {
  let location = useLocation().pathname;
  return location;
}

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsByCategory: JSON.parse(localStorage.getItem('productsByCategory')) || [],
      productsFilterByPrice: [],
      modalOpen: false,
      filterBrandModal: false,
      filterPriceModal: false,
      filterPrice: false,
      isProduct: false,
      productType: productType[0],
      category: JSON.parse(localStorage.getItem('category')) || "",
      titleImg: JSON.parse(localStorage.getItem('titleImg')) || "",
    };
  }


  componentDidMount() {
    axios.get(`http://localhost:5000/products`)
      .then((response) => {
        const productsList = response.data;
        this.setState(() => ({
          products: productsList
        }))
      })
      .catch(e => {
        console.log(e);
      });
    if (localStorage.getItem('productsByCategory') === null) {
      this.setIsProduct();
    }
    this.closeModal();
  }


  setProducts = (category) => {
    let tempProducts = this.state.products;
    let productsByCategory = tempProducts.filter(product => product.category === category);
    this.setState(
      { productsByCategory: productsByCategory },
      () => { localStorage.setItem('productsByCategory', JSON.stringify(this.state.productsByCategory)) }
    )
  };

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

  destructLocalStorage = () => {
    this.setState(
      () => localStorage.removeItem('productsByCategory'),
      () => localStorage.removeItem('category'),
      () => localStorage.removeItem('titleImg')
    )
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

  setTitle = (title) => {
    this.setState({
      category: title,
    },
      () => { localStorage.setItem('category', JSON.stringify(this.state.category)) },
    )
  }

  setTitleImg = (img) => {
    this.setState({
      titleImg: img
    }, () => { localStorage.setItem('titleImg', JSON.stringify(this.state.titleImg)) })
  }
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          setProducts: this.setProducts,
          setTitle: this.setTitle,
          setTitleImg: this.setTitleImg,
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
          unSetIsProduct: this.unSetIsProduct,
          destructLocalStorage: this.destructLocalStorage,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };

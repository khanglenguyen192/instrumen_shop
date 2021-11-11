import React, { Component } from "react";
import priceWithDots from "./priceWithDots";
const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    category: "",
    modalOpen: false,
  };

  setProducts = (data) => {
    let tempProducts = [];
    data.forEach(item => {
      const it = { ...item };
      tempProducts = [...tempProducts, it];
    });
    this.setState({
      products: tempProducts
    })
  }

  openSortModal = () => {
    this.setState(() => {
      return { modalOpen: true };
    })
  }

  closeSortModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    })
  }

  sortProducts = (type) => {
    let tempProducts = [];

    this.state.products.forEach(item => {
      const it = { ...item };
      tempProducts = [...tempProducts, it];
    });
    if (type === "a-z") {
      tempProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "z-a") {
      tempProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (type === "ascen") {
      tempProducts.sort((a, b) => priceWithDots(a.price).localeCompare(priceWithDots(b.price)));
    } else if (type === "descen") {
      tempProducts.sort((a, b) => priceWithDots(b.price).localeCompare(priceWithDots(a.price)));
    }

    this.setState({
      products: tempProducts
    })
  }

  setTitle = (title) => {
    this.setState({
      category: title
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
          openSortModal: this.openSortModal,
          closeSortModal: this.closeSortModal
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };

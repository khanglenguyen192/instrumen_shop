import React, { Component } from "react";
import { productList } from "./data";
const Context = React.createContext();

class Provider extends Component {
    state = {
        products: productList
    };
    viewDetail() {
        console.log("Detail");
    }
    addToCart() {
        console.log("Added");
    }
    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                viewDetail: this.viewDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
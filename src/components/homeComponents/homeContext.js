import React, { Component } from "react";
const Context = React.createContext();

class Provider extends Component {
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state.products,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };

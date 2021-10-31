import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Introduction from "./pages/introduction";
import Product from "./pages/product";
import Services from "./pages/services";
import Posts from "./pages/posts";
import Promotion from "./pages/promotion";
import Contact from "./pages/contact";
import Installment from "./pages/installment";
import { FooterContainer } from "./container/footer";
import SearchBar from "./components/SearchBar";
import ProductInfo from "./pages/one_product";

function App() {
  return (
    <div>
      <Router>
        <SearchBar />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/introduction" exact component={Introduction} />
          <Route path="/product" exact component={Product} />
          <Route path="/services" exact component={Services} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/promotion" exact component={Promotion} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/installment" exact component={Installment} />
          <Route path="/products/one-product" exact component={ProductInfo} />
        </Switch>
      </Router>

      <FooterContainer />
    </div>
  );
}

export default App;
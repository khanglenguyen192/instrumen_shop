import ProductList from "./product_list";
import Contact from "./contact";
import React from "react";
import {Switch, Route} from 'react-router-dom';
import './ProductList_Contact.css'

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </React.Fragment>
        )
    }
}

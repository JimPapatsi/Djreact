import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import Paintings from "./pages/paintings";
import Drawings from "./pages/drawings";
import Sculptures from "./pages/sculptures";
import Collages from "./pages/collages";
import Contact from "./pages/contact";
import CheckoutPage from "./pages/cart";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/Paintings" component={Paintings} />
    <Route exact path="/Drawings" component={Drawings} />
    <Route exact path="/Sculptures" component={Sculptures} />
    <Route exact path="/Collages" component={Collages} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Cart" component={CheckoutPage} />
  </Switch>
);

export default Router;

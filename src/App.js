import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Event from "./Components/Event/Event";
import Category from "./Components/Category/Category";
import Selling from "./Components/Selling/Selling";
import Basket from "./Components/Basket/Basket";
import Support from "./Components/Support/Support";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/LandingPage" component={LandingPage} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/selling" component={Selling} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

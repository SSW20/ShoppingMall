import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
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
        <Route exact path="/Home" component={Home} />
        <Route path="/event" component={Event} />
        <Route path="/category" component={Category} />
        <Route path="/selling" component={Selling} />
        <Route path="/basket" component={Basket} />
        <Route path="/support" component={Support} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";

const Navigation = props => (
  <nav>
    <ul className="Navbar_menu">
      <li>
        <NavLink className="Nav_link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="Nav_link" to="/Paintings">
          Paintings
        </NavLink>
      </li>
      <li>
        <NavLink className="Nav_link" to="/Drawings">
          Drawings
        </NavLink>
      </li>
      <li>
        <NavLink className="Nav_link" to="/Sculptures">
          Sculptures
        </NavLink>
      </li>
      <li>
        <NavLink className="Nav_link" to="/Collages">
          Collages
        </NavLink>
      </li>
      <li>
        <NavLink className="Nav_link" to="/Contact">
          Contant
        </NavLink>
      </li>
      <li>
        <NavLink className="Nav_link" to="/Cart">
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img alt="header" src={"/header.jpg"} className="Header" />
        </div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;

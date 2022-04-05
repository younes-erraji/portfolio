import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <input id="nav-check" type="checkbox" />
          <Link className="nav-header" to="/">
            <div className="nav-brand">
              <img src={Logo} height="43.6" alt="" />
            </div>
            <div className="nav-title">Younes ERRAJI</div>
          </Link>
          <div className="nav-button">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink className="account m-inline:1" to="/sign-in">
              Sign In
            </NavLink>
            <NavLink className="account" to="/sign-up">
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

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
            <NavLink activeClassName="selected" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="selected" to="/about">
              About
            </NavLink>
            <NavLink activeClassName="selected" to="/skills">
              Skills
            </NavLink>
            <NavLink activeClassName="selected" to="/projects">
              Projects
            </NavLink>
            <NavLink activeClassName="selected" to="/careers">
              Careers
            </NavLink>
            <NavLink activeClassName="selected" to="/contact">
              Contact
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="account m-inline:1"
              to="/sign-in"
            >
              Sign In
            </NavLink>
            <NavLink
              activeClassName="selected"
              className="account"
              to="/sign-up"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

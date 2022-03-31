import React, { Component } from "react";
import Logo from "../images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <input id="nav-check" type="checkbox" />
          <a className="nav-header" href="./index.html">
            <div className="nav-brand">
              <img src={Logo} height="43.6" alt="" />
            </div>
            <div className="nav-title">Younes ERRAJI</div>
          </a>
          <div className="nav-button">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="nav-links">
            <a href="./index.html">Home</a>
            <a href="./about.html">About</a>
            <a href="./skills.html">Skills</a>
            <a href="./projects.html">Projects</a>
            <a href="./careers.html">Careers</a>
            <a href="./contact.html">Contact</a>
            <a className="account m-inline:1" href="./sign-in.html">
              Sign In
            </a>
            <a className="account" href="./sign-up.html">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

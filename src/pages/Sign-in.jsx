import React, { Component } from "react";
import ConnectWith from "../assets/components/sign-in-up-with";

import "../assets/styles/authentication.css";

class Sign_In extends Component {
  render() {
    return (
      <>
        <div className="auth">
          <h2 className="special-heading">Sign In</h2>
          <p>## 🙋 Log in to Your account</p>
          <form className="form-auth" id="form-login" method="post">
            <div className="username">
              <label className="form-label" htmlFor="username">
                Username or E-mail <small className="required">*</small>
              </label>
              <input
                className="form-field"
                id="username"
                type="text"
                name="username"
                required
                autoFocus
              />
            </div>
            <div className="password">
              <label className="form-label" htmlFor="password">
                Password <small className="required">*</small>
              </label>
              <input
                className="form-field"
                id="password"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label className="form-label" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <span className="switch-authentication">
              not a member yet? &nbsp;
              <a className="link" href="./register.html">
                sign up
              </a>
            </span>
            <input
              className="login button primary"
              type="submit"
              value="Login"
            />
            <section className="noe">
              <span>or Sign in with</span>
            </section>
            <ConnectWith />
          </form>
        </div>
      </>
    );
  }
}

export default Sign_In;

import React, { Component } from "react";
import ConnectWith from "../assets/components/sign-in-up-with";

import "../assets/styles/authentication.css";

class Sign_Up extends Component {
  render() {
    return (
      <>
        <div className="auth">
          <h2 className="special-heading">Sign Up</h2>
          <p>## 🙋 Create a new account</p>
          <form className="form-auth" id="form-register" method="POST">
            <div className="name">
              <label className="form-label" htmlFor="name">
                Name <small className="required">*</small>
              </label>
              <input
                className="form-field"
                id="name"
                type="text"
                name="name"
                required
                autoFocus
              />
            </div>
            <div className="email">
              <label className="form-label" htmlFor="email">
                E-mail <small className="required">*</small>
              </label>
              <input
                className="form-field"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="username">
              <label className="form-label" htmlFor="username">
                Username <small className="required">*</small>
              </label>
              <input
                className="form-field"
                id="username"
                type="text"
                name="username"
                required
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
            <div className="confirm">
              <label className="form-label" htmlFor="confirm-password">
                Confirmation<small className="required">*</small>
              </label>
              <input
                className="form-field"
                id="confirm-password"
                type="password"
                name="confirm-password"
                required
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="conditions" name="checkbox" />
              <label className="form-label" htmlFor="conditions">
                Privacy &amp; conditions
              </label>
            </div>
            <span className="switch-authentication">
              already a member? &nbsp;
              <a className="link" href="./sign-in.html">
                sign in
              </a>
            </span>
            <input
              className="register button primary"
              type="submit"
              value="Register"
            />
            <section className="noe">
              <span>or Sign up with</span>
            </section>
            <ConnectWith />
          </form>
        </div>
      </>
    );
  }
}

export default Sign_Up;

import { Link } from "react-router-dom";

import ConnectWith from "../assets/components/sign-in-up-with";

import "../assets/styles/authentication.css";

const Sign_Up = () => {
  return (
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
            autoFocus
          />
        </div>
        <div className="email">
          <label className="form-label" htmlFor="email">
            E-mail <small className="required">*</small>
          </label>
          <input className="form-field" id="email" type="email" name="email" />
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
          <Link className="link" to="/sign-in">
            sign in
          </Link>
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
  );
};

export default Sign_Up;

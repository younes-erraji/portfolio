import { useRef } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import ConnectWith from "../assets/components/sign-in-up-with";

import "../assets/styles/authentication.css";

const Feedback = Styled.small`
  display: block;
  font-size: 14px;
  color: var(--red);
`;

const Sign_In = () => {
  const usernameRef = useRef();
  const usernameMessageRef = useRef();
  const passwordRef = useRef();
  const passwordMessageRef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (usernameRef.current.value === "") {
      usernameMessageRef.current.textContent = "The Username Field is Required";
    } else {
      usernameMessageRef.current.textContent = "";
    }

    if (passwordRef.current.value === "") {
      passwordMessageRef.current.textContent = "The Password Field is Required";
    } else if (passwordRef.current.value.length < 7) {
      passwordMessageRef.current.textContent =
        "The Password Field Should Contains at Least 7 Chars";
    } else {
      passwordMessageRef.current.textContent = "";
    }
  };

  return (
    <div className="auth">
      <h2 className="special-heading">Sign In</h2>
      <p>## 🙋 Log in to Your account</p>
      <form
        className="form-auth"
        id="form-login"
        method="POST"
        onSubmit={handleSignIn}
      >
        <div className="username">
          <label className="form-label" htmlFor="username">
            Username or E-mail <small className="required">*</small>
          </label>
          <input
            className="form-field"
            id="username"
            type="text"
            name="username"
            ref={usernameRef}
            autoFocus
          />
          <Feedback ref={usernameMessageRef}></Feedback>
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
            ref={passwordRef}
          />
          <Feedback ref={passwordMessageRef}></Feedback>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox" name="checkbox" />
          <label className="form-label" htmlFor="checkbox">
            Remember me
          </label>
        </div>
        <span className="switch-authentication">
          not a member yet? &nbsp;
          <Link className="link" to="/sign-up">
            sign up
          </Link>
        </span>
        <input type="submit" className="login button primary" value="Login" />
        <section className="noe">
          <span>or Sign in with</span>
        </section>
        <ConnectWith />
      </form>
    </div>
  );
};

export default Sign_In;

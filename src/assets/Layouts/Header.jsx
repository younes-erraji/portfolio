import React, { Component } from "react";

import Socials from "../components/Socials";

import Morocco from "../icons/flags/morocco.svg";
import France from "../icons/flags/france.svg";
import UnitedState from "../icons/flags/united states.svg";

import phone from "../icons/phone.svg";
import http from "../icons/http.svg";
import chat from "../icons/chat.svg";

class Header extends Component {
  render() {
    return (
      <>
        <div className="grad-bar"></div>
        <header>
          <div className="container">
            <marquee className="info">
              <ul className="list-unstyled">
                <li>
                  <img src={phone} alt="phone" />
                  <div className="content">
                    <strong>+212 651 656 799</strong>
                    <strong>06 51 65 67 99</strong>
                  </div>
                </li>
                <li>
                  <img src={chat} alt="chat" />
                  <div className="content">
                    <strong>younes.erraji8@gmail.com</strong>
                  </div>
                </li>
                <li>
                  <img src={http} alt="" />
                  <div className="content">
                    <strong>https://younes-erraji.github.io</strong>
                  </div>
                </li>
              </ul>
            </marquee>
            <Socials />
            <div className="languages">
              <div className="change">
                <img src={Morocco} alt="Arabic" />
                <span>AR</span>
                <i className="fa fa-bars"></i>
              </div>
              <div className="form select">
                <a className="active" href="#">
                  <img src={Morocco} alt="Arabic" />
                  <span>Arabic</span>
                </a>
                <a href="#">
                  <img src={France} alt="French" />
                  <span>French</span>
                </a>
                <a href="#">
                  <img src={UnitedState} alt="English" />
                  <span>English</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Socials from "../components/Socials";

import map from "../icons/map.svg";
import phone from "../icons/phone.svg";
import http from "../icons/http.svg";
import chat from "../icons/chat.svg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="page-info">
          <div className="container">
            <div className="portfolio">
              <h3>Younes ERRAJI</h3>
              <ul className="list-unstyled">
                <li>
                  <img src={map} alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minus facere qui fugiat repellendus impedit.
                  </p>
                </li>
                <li>
                  <img src={chat} alt="" />
                  younes.erraji8@gmail.com
                </li>
                <li>
                  <img src={phone} alt="" />
                  06 51.65.67.99
                </li>
                <li>
                  <img src={phone} alt="" />
                  (+212) 6 51.65.67.99
                </li>
                <li>
                  <a href="https://younes-erraji.github.io">
                    <img src={http} alt="" />
                    https://younes-erraji.github.io
                  </a>
                </li>
              </ul>
            </div>
            <div className="links">
              <h4>links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="./index.html">- Home</a>
                </li>
                <li>
                  <a href="#about">- About</a>
                </li>
                <li>
                  <a href="#skills">- Skills</a>
                </li>
                <li>
                  <a href="#work">- Work</a>
                </li>
                <li>
                  <a href="#careers">- Careers</a>
                </li>
                <li>
                  <a href="#contact">- Contact</a>
                </li>
              </ul>
            </div>
            <div className="about">
              <h4>about</h4>
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                pariatur dolore quos dolor eos numquam repellat unde illo
                deleniti? Officia unde saepe minima iusto aspernatur fugiat nam
                quae, iste nulla blanditiis! Dolores magnam modi nihil provident
                recusandae quo! Sit reiciendis explicabo commodi repellendus
                expedita.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores ipsa nam inventore, voluptatibus in accusantium,
                asperiores mollitia, quaerat ipsum nihil doloremque odit!
              </article>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>
              &copy; Copyright <strong>Younes ERRAJI</strong>.
              <br />
              All Rights Reserved.
              <br />
              Designed with ❤ by Younes ERRAJI.
            </p>
            <Socials />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

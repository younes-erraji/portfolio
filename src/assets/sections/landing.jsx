import React, { Component } from "react";

import Logo from "../images/logo.png";
import Wave from "../images/wave.gif";

import Resume from "../resume.pdf";

class Landing extends Component {
  componentDidMount() {
    const landingPage = document.querySelector(".landing"),
      backgrounds = ["0.jpg", "1.jpg", "2.jpg", "3.jfif", "4.jpg", "5.jpg"];

    let i = 1;

    setInterval(function () {
      if (i < backgrounds.length - 1) {
        landingPage.style.backgroundImage = `url("./assets/images/backgrounds/${backgrounds[i]}")`;

        i++;
      } else {
        i = 0;
      }
    }, 18000);
  }

  render() {
    return (
      <div className="landing">
        <div className="overlay"></div>
        <div className="intro-image">
          <img src={Logo} alt="" />
        </div>
        <div className="intro-text">
          <h1>
            Hi
            <img src={Wave} alt="" width="30px" />, I'm &nbsp;
            <span>Younes ERRAJI</span>
          </h1>
          <p>
            a passionate Full Stack Developer from Morocco. I like to write
            code, I like to dig into problems and solve them. I also enjoy UI,
            UX, and design in general. I am working on developing my skills,
            Enthusiastic and self-taugh.
          </p>
          <a
            className="button secondary resume"
            href={Resume}
            download="resume"
            target="_blank"
            rel="noreferrer"
          >
            Get Resume
          </a>
        </div>
        <div className="hash">#Younes_ERRAJI</div>
      </div>
    );
  }
}
export default Landing;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/styles/style.css";
import Landing from "../assets/sections/landing";
import About from "../assets/sections/about";
import Skills from "../assets/sections/skills";
import Services from "../assets/sections/services";
import Projects from "../assets/sections/projects";
import Careers from "../assets/sections/careers";
import Resources from "../assets/sections/resources";

import arrowDown from "../assets/icons/arrow-down.svg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      countDown: "",
    };
  }
  
  componentDidMount() {
    let countDownDate = new Date("Aug 16, 2022 00:00:00").getTime();
    let x = setInterval(() => {
      var now = new Date().getTime(),
        distance = countDownDate - now,
        D = Math.floor(distance / (1000 * 60 * 60 * 24)),
        H = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        M = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        S = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        countDown: `${D < 10 ? `0${D}` : D} / ${H < 10 ? `0${H}` : H}:${
          M < 10 ? `0${M}` : M
        }:${S < 10 ? `0${S}` : S}`,
      });

      if (distance < 0) {
        this.setState({
          countDown: `Done`,
        });

        clearInterval(x);
      }
    }, 1000);
  }
  render() {
    return (
      <>
        <Landing />
        <About />
        <Skills />
        <Services />
        <Projects length={3}>
          <Link className="button primary show-more" to="/projects">
            show more
            <img src={arrowDown} alt="" />
          </Link>
        </Projects>
        <Careers />
        <Resources />
        <div className="timer">
          <div className="container">
            <div className="remaining-time">{this.state.countDown}</div>
          </div>
        </div>
        <div className="contact">
          <div className="container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde,
              minima a explicabo maiores aut ducimus magni, iure illo architecto
              amet ipsum provident fuga modi quos cumque voluptate quia? Ea,
              aliquid accusamus quam perferendis neque nemo voluptatem corrupti!
            </p>
            <Link className="button primary" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

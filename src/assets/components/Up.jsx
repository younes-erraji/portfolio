import React, { Component } from "react";

import arrowUp from "../icons/arrow-up.svg";

class Up extends Component {
  componentDidMount() {
    const upButton = document.querySelector("button.up");
    if (window.scrollY > 1000) {
      upButton.style.display = "flex";
    }

    window.onscroll = () => {
      if (window.scrollY > 1000) {
        upButton.style.display = "flex";
      } else {
        upButton.style.display = "none";
      }
    };
  }

  render() {
    return (
      <button
        className="button primary up"
        style={{ display: "none" }}
        onClick={this.scrollUp}
      >
        <img src={arrowUp} alt="" />
      </button>
    );
  }

  scrollUp = () => {
    console.log("scroll");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

export default Up;

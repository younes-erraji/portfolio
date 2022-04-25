import React, { Component, createRef } from "react";

import arrowUp from "../icons/arrow-up.svg";

class Up extends Component {
  constructor() {
    super();
    this.upButton = createRef();
  }

  componentDidMount() {
    if (window.scrollY > 1000) {
      this.upButton.current.style.display = "flex";
    }

    window.onscroll = () => {
      if (window.scrollY > 1200) {
        this.upButton.current.style.display = "flex";
      } else {
        this.upButton.current.style.display = "none";
      }
    };
  }

  render() {
    return (
      <button
        className="button primary up"
        style={{ display: "none" }}
        onClick={this.scrollUp}
        ref={this.upButton}
      >
        <img src={arrowUp} alt="" />
      </button>
    );
  }

  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

export default Up;

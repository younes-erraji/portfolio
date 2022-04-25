import React, { useEffect, useRef } from "react";

import Morocco from "../icons/flags/morocco.svg";
import France from "../icons/flags/france.svg";
import UnitedState from "../icons/flags/united states.svg";

const Languages = () => {
  const toggleLangs = useRef(),
    changeLangButtonsContainer = useRef();
  useEffect(() => {
    const selectLangButtons = document.querySelectorAll(".languages .select a");

    selectLangButtons.forEach((lang) => {
      lang.addEventListener("click", function () {
        selectLangButtons.forEach(function (item) {
          item.classList.remove("active");
        });
        this.classList.add("active");
      });
    });

    toggleLangs.current.addEventListener("click", function (e) {
      this.parentElement.classList.toggle("change-language");
    });

    document.addEventListener("click", (e) => {
      if (
        e.target !== changeLangButtonsContainer.current &&
        e.target !== toggleLangs.current
      ) {
        toggleLangs.current.parentElement.classList.remove("change-language");
      }
    });

    changeLangButtonsContainer.current.onclick = (e) => {
      e.stopPropagation();
    };

    toggleLangs.current.onclick = (e) => {
      e.stopPropagation();
    };
  });

  return (
    <div className="languages">
      <div className="change" ref={toggleLangs}>
        <img src={Morocco} alt="Arabic" />
        <span>AR</span>
        <i className="fa fa-bars"></i>
      </div>
      <div ref={changeLangButtonsContainer} className="form select">
        <a className="active">
          <img src={Morocco} alt="Arabic" />
          <span>Arabic</span>
        </a>
        <a>
          <img src={France} alt="French" />
          <span>French</span>
        </a>
        <a>
          <img src={UnitedState} alt="English" />
          <span>English</span>
        </a>
      </div>
    </div>
  );
};

export default Languages;

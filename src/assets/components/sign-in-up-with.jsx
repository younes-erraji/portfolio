import React from "react";
import Facebook from "../icons/social media/facebook.svg";
import Github from "../icons/social media/github.png";
import Google from "../icons/social media/google.svg";

function ConnectWith() {
  return (
    <div className="sign-in-up-with-container">
      <div className="sign-in-up-with facebook">
        <img className="icon" src={Facebook} alt="" />
      </div>
      <div className="sign-in-up-with google">
        <img className="icon" src={Google} alt="" />
      </div>
      <div className="sign-in-up-with github">
        <img className="icon" src={Github} alt="" />
      </div>
    </div>
  );
}

export default ConnectWith;

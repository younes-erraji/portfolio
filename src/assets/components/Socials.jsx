import React from "react";

import Instagram from "../icons/social media/instagram.svg";
import LinkedIn from "../icons/social media/linkedin.svg";
import Github from "../icons/social media/github.png";
import CodePen from "../icons/social media/codepen.svg";
import Telegram from "../icons/social media/telegram.svg";

function Socials() {
  return (
    <ul className="socials list-unstyled">
      <li>
        <a
          title="Instagram"
          href="https://www.instagram.com/younes__erraji"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/younes-erraji"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a
          title="CodePen"
          href="https://codepen.io/younes-erraji"
          target="_blank"
          rel="noreferrer"
        >
          <img src={CodePen} alt="CodePen" />
        </a>
      </li>
      <li>
        <a
          title="Github"
          href="https://www.github.com/younes-erraji"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="Github" />
        </a>
      </li>
      <li>
        <a
          title="Telegram"
          href="https://t.me/younes_erraji"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Telegram} alt="Telegram" />
        </a>
      </li>
    </ul>
  );
}

export default Socials;

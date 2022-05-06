import Socials from "../components/Socials";
import Languages from "../components/Languages";

import phone from "../icons/phone.svg";
import http from "../icons/http.svg";
import chat from "../icons/chat.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <marquee className="info">
          <ul className="list-unstyled">
            <li>
              <img src={phone} alt="phone" />
              <div className="content">
                <strong>+212 6## ### ###</strong>
                <strong>06 ## ## ## ##</strong>
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
        <Languages />
      </div>
    </header>
  );
};

export default Header;

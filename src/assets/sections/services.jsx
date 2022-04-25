import GraphicDesign from "../icons/services/graphic-design.svg";
import UI_UX from "../icons/services/ui-ux.svg";
import WebDesign from "../icons/services/web-design.svg";
import WebDevelopment from "../icons/services/programming.svg";

import Services from "../images/services.jpg";

const services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <h2 className="special-heading">Services</h2>
        <p>## 👯 Don't be busy, be productive</p>
        <div className="services-content">
          <div className="column">
            <div className="service">
              <img src={GraphicDesign} alt="" />
              <div className="text">
                <h3>Graphic Design</h3>
                <p>
                  Graphic design is the process of visual communication and
                  problem-solving using one or more of typography, photography
                  and illustration.
                </p>
              </div>
            </div>
            <div className="service">
              <img src={UI_UX} alt="" />
              <div className="text">
                <h3>UI &amp; UX</h3>
                <p>
                  Process of enhancing user satisfaction with a product by
                  improving the usability, accessibility, and pleasure provided
                  in the interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="service">
              <img src={WebDesign} alt="" />
              <div className="text">
                <h3>Web Design</h3>
                <p>
                  Web design encompasses many different skills and disciplines
                  in the production and maintenance of websites.
                </p>
              </div>
            </div>
            <div className="service">
              <img src={WebDevelopment} alt="" />
              <div className="text">
                <h3>Web Development</h3>
                <p>
                  Web development is a broad term for the work involved in
                  developing a web site for the Internet or an intranet.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="image image-column">
              <img src={Services} alt="Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;

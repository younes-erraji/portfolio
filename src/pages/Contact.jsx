import { useRef } from "react";
import Styled from "styled-components";

import "../assets/styles/contact.css";

import Resources from "../assets/sections/resources";

import map from "../assets/icons/map.svg";
import phone from "../assets/icons/phone.svg";
import chat from "../assets/icons/chat.svg";

const Feedback = Styled.small`
  display: block;
  font-size: 14px;
  color: var(--red);
`;

const Contact = () => {
  const nameRef = useRef();
  const nameFeedbackRef = useRef();
  const emailRef = useRef();
  const emailFeedbackRef = useRef();
  const phoneRef = useRef();
  const phoneFeedbackRef = useRef();
  const messageRef = useRef();
  const messageFeedbackRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameRef.current.value === "") {
      nameFeedbackRef.current.textContent = "The Name Field is Required";
    } else {
      nameFeedbackRef.current.textContent = "";
    }

    if (emailRef.current.value === "") {
      emailFeedbackRef.current.textContent = "The E-mail Field is Required";
    } else {
      emailFeedbackRef.current.textContent = "";
    }

    if (phoneRef.current.value === "") {
      phoneFeedbackRef.current.textContent = "The Phone Field is Required";
    } else {
      phoneFeedbackRef.current.textContent = "";
    }

    if (messageRef.current.value === "") {
      messageFeedbackRef.current.textContent = "The Message Field is Required";
    } else {
      messageFeedbackRef.current.textContent = "";
    }
  };

  return (
    <>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?"
        height="240"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      <div className="contact" id="contact">
        <div className="overlay"></div>
        <div className="container">
          <div className="contact-info">
            <h2 className="special-heading">Contact Us</h2>
            <p>## 📫 Connect with me</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              iusto repudiandae harum placeat sequi, illo incidunt tempora nemo
              modi alias. Esse quaerat consectetur reprehenderit dolorum nisi
              blanditiis, dolorem illo ipsa perspiciatis facere officiis
              quisquam magnam odio eaque eos sapiente nemo repudiandae error
              eius dicta.
            </p>
            <p>
              <img src={map} alt="" />
              Témara, Morocco
            </p>
            <p>
              <img src={chat} alt="" />
              younes.erraji8@gmail.com
            </p>
            <p>
              <img src={phone} alt="" />
              06 ##.##.##.##
            </p>
            <p>
              <img src={phone} alt="" />
              (+212) 6 ##.##.##.##
            </p>
          </div>
          <form method="POST" onSubmit={handleSubmit}>
            <p>
              Send an e-mail. <br /> All fields marked with an asterisk * are
              required
            </p>
            <label className="form-label" htmlFor="name">
              Name <small className="required">*</small>
            </label>
            <input
              className="form-field"
              type="text"
              id="name"
              ref={nameRef}
              autoFocus
            />
            <Feedback ref={nameFeedbackRef}></Feedback>
            <label className="form-label" htmlFor="email">
              E-mail address <small className="required">*</small>
            </label>
            <input
              className="form-field"
              type="email"
              id="email"
              ref={emailRef}
            />
            <Feedback ref={emailFeedbackRef}></Feedback>
            <label className="form-label" htmlFor="phone">
              Phone number <small className="required">*</small>
            </label>
            <input
              className="form-field"
              type="text"
              id="phone"
              ref={phoneRef}
            />
            <Feedback ref={phoneFeedbackRef}></Feedback>
            <label className="form-label" htmlFor="message">
              Message <small className="required">*</small>
            </label>
            <textarea
              className="form-field"
              id="message"
              ref={messageRef}
            ></textarea>
            <Feedback ref={messageFeedbackRef}></Feedback>
            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label className="form-label" htmlFor="checkbox">
                Send a copy to your address
              </label>
            </div>
            <input className="button primary" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <Resources />
    </>
  );
};

export default Contact;

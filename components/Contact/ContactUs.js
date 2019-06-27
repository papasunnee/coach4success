import React, { Fragment } from "react";
import Link from "next/link";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <Fragment>
      <div className="head-contact">
        <h2>Contact Us</h2>
      </div>
      <div className="title-contact">
        <div className="logo-contact">
          <div className="img-contact">
            <img src="static/contact/logo.png" alt="image here" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
          </div>
          <div className="content-contact">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
      </div>
      <div className="body-contact">
        <div className="info-contact">
          <p className="first-contact">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation
          </p>
          <p className="second-contact">
            User questions, comments, or ideas, click{" "}
            <Link>
              <a href="#">here</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="contact-section">
        <div className="form-contact">
          <div className="send-contact">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address" />
            {/* <input type="text" placeholder="Feedback" /> */}
            <textarea placeholder="Feedback" cols="6" rows="4" />
            <button type="submit">SEND</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;

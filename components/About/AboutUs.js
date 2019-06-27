import React, { Fragment } from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <Fragment>
      <div className="head-about">
        <h2>About Us</h2>
      </div>
      <div className="title-about">
        <div className="cow">
          <div className="img-about">
            <img src="static/about/logo.png" alt="image here" />
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
          </div>
          <div className="content-about">
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
    </Fragment>
  );
};

export default AboutUs;

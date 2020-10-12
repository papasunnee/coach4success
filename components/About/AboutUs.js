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
              Coach4success is a leading career coaching firm that helps
              individuals discover their careers, guide them in making
              career-related choices and, landing their dream jobs. We are made
              up of individuals vast in all forms of the perspective of career
              decision making. We have offices all over the country and a strong
              connection in every part of the world, we believe distance
              shouldn’t be a barrier between us and providing adequate services
              to our clients.
            </p>
            <p>
              We aspire to help individuals build their careers and personal
              brands, primarily in discovering career paths with their core
              skills, talents, and educational experience, writing and,
              reviewing their resume, cover letter, and LinkedIn profile. With
              our one-on-one interview coaching with one of our expert interview
              coaches, we help prepare individuals for interviews{" "}
            </p>
            <p>
              We are established to change the lives of individuals seeking
              career paths and attain a peak in their career life, by edifying
              their personal branding. We believe that to make the world a
              better place, the most qualified and suitable individuals should
              be placed in the right career path they deserve and perfectly
              tailored for their desired jobs.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;

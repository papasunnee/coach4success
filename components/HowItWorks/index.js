import React, { Component } from "react";
import "./index.scss";

import MyContainer from "../MyContainer";
import { Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";

const Index = () => {
  return (
    <div className="wrapper">
      <MyContainer>
        <Col md={12}>
          <h2>How It Works</h2>
        </Col>

        <Col md={3}>
          <div>
            <SvgLoader src="/static/svgs/step1.svg" />
            <h6>STEP 1</h6>
            <h6>Choose a Service</h6>
            <p>
              Find the best coaching option to help you tackle (and overcome)
              your current career obstacle.
            </p>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <SvgLoader src="/static/svgs/step2.svg" />
            <h6>STEP 2</h6>
            <h6>Book a Carrer Coach</h6>
            <p>
              Explore our roster of top-notch career coaches who provide the
              service you need. Check out reviews from other customers to help
              you pick the right one.
            </p>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <SvgLoader src="/static/svgs/step3.svg" />
            <h6>STEP 3</h6>
            <h6>Decide on a Time</h6>
            <p>
              Your career coach will reach out to you within one business day to
              schedule your first appointment.
            </p>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <SvgLoader src="/static/svgs/step4.svg" />
            <h6>STEP 4</h6>
            <h6>Get Started!</h6>
            <p>
              Meet with your career coach for a session by phone or video—and
              kick your career into high gear!
            </p>
          </div>
        </Col>

        <Col md={12}>
          <p className="footNote">
            <span>More questions on what to expect?</span> Head on over to our{" "}
            <span>Coaching FAQs</span> or contact one of our career experts
          </p>
        </Col>
      </MyContainer>
    </div>
  );
};

export default Index;

import React, { Component } from "react";
import "./index.scss";

import MyContainer from "../MyContainer";
import { Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";

const Index = () => {
  return (
    <div className="footer">
      <MyContainer>
        <Col md={3}>
          {/* <SvgLoader src="/static/svgs/footerLogo.svg" /> */}
          <p>Footer Logo Here</p>
          <p>Copyright 2018 Coach4Success</p>
        </Col>
        <Col md={3}>
          <h5>ABOUT Coach4Success</h5>
          <ul>
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>
        <Col md={3}>
          <h5>Resources</h5>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </Col>
        <Col md={3}>
          <h5>GET INVOLVED</h5>
          <ul>
            <li>For Career Coaches</li>
            <li>Send Feedback About Coach4Success</li>
            <li>Tell a Friend</li>
          </ul>
        </Col>
      </MyContainer>
    </div>
  );
};

export default Index;

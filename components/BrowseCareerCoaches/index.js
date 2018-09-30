import React, { Component } from "react";
import "./index.scss";

import MyContainer from "../MyContainer";
import { Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";

const Index = () => {
  return (
    <div className="browse">
      <MyContainer>
        <Col md={12}>
          <h2>Browse all of our Career Coaches</h2>
          <p>
            Search all of our coaches and find someone you want to work with
          </p>
          <a href="http://">BROWSE ALL COACHES</a>
        </Col>
      </MyContainer>
    </div>
  );
};

export default Index;

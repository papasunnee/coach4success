import React, { Component } from "react";
import ServiceList from "./serviceList";
import { Col } from "reactstrap";

const Services = () => {
  {
    ServiceList.map(({ label }) => (
      <Col md={3}>
        <div>{label}</div>
      </Col>
    ));
  }
};

export default Services;

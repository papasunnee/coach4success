import React, { Component } from "react";
import { Col } from "reactstrap";
import Layout from "../components/Layout";
import Lorem from "../components/Lorem";
import MyContainer from "../components/MyContainer";
import serviceList from "../components/Services/serviceList";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <MyContainer>
          <Col md={6}>
            <Lorem paragraph={3} />
          </Col>
          <Col md={6}>
            <Lorem paragraph={3} />
          </Col>

          {/* {serviceList.map(({ label }) => {
            <Col md={3}>
              <div className="orangeService">{label}</div>
            </Col>;
          })} */}
        </MyContainer>
      </Layout>
    );
  }
}

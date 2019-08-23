import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Layout from "../components/Layout";
import Lorem from "../components/Lorem";
import MyContainer from "../components/MyContainer";
import ServiceIndex from "../components/Services";
import Service from "../components/Services/Service";
import Orangeservices from "../components/Orangeservices";
import Additional from "../components/Services/Additional";
import HowItWorks from "../components/HowItWorks";
import BrowseCareerCoaches from "../components/BrowseCareerCoaches";

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <MyContainer>
          <Row>
            <Col md={6}>
              <Lorem paragraph={3} />
            </Col>
            <Col md={6}>
              <Lorem paragraph={3} />
            </Col>
            <Col md={12}>
              <h2
                style={{
                  textAlign: "center",
                  margin: "40px auto",
                  fontWeight: "bold"
                }}
              >
                Our Top Services
              </h2>
            </Col>
            <Orangeservices serviceList={Service} />
            {/* <ServiceIndex serviceList={Service} bgColor="#FF5500" /> */}
            <Col md={12}>
              <h2
                style={{
                  textAlign: "center",
                  margin: "40px auto",
                  fontWeight: "bold"
                }}
              >
                Additional Coaching Services
              </h2>
            </Col>
            <ServiceIndex collapsible serviceList={Additional} />
          </Row>
        </MyContainer>

        <HowItWorks />
        <BrowseCareerCoaches />
      </Layout>
    );
  }
}

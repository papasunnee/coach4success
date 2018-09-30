import React, { Component } from "react";
import { Col } from "reactstrap";
import Layout from "../components/Layout";
import Lorem from "../components/Lorem";
import MyContainer from "../components/MyContainer";
import ServiceIndex from "../components/Services";
import Service from "../components/Services/Service";
import Additional from "../components/Services/Additional";
import HowItWorks from "../components/HowItWorks";
import BrowseCareerCoaches from "../components/BrowseCareerCoaches";
import Footer from "../components/Footer";

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

          <ServiceIndex serviceList={Service} bgColor="#FF5500" />
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
          <ServiceIndex serviceList={Additional} />
        </MyContainer>

        <HowItWorks />
        <BrowseCareerCoaches />
        <Footer />
      </Layout>
    );
  }
}

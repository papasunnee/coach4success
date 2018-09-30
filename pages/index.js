import React, { Component } from "react";
import { Col } from "reactstrap";
import Layout from "../components/Layout";
import Lorem from "../components/Lorem";
import MyContainer from "../components/MyContainer";
import ServiceIndex from "../components/Services";
import Service from "../components/Services/Service";
import Additional from "../components/Services/Additional";

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
        <div
          style={{
            height: "300px",
            width: "100%",
            backgroundColor: "#E5E5E5"
          }}
        >
          <MyContainer>
            <div
              style={{
                display: "flex",
                flex: "0 1 auto",
                padding: "30px auto"
              }}
            >
              <div>Sunday</div>
              <div>Funmilola</div>
              <div>Sunday</div>
              <div>Sunday</div>
            </div>
          </MyContainer>
        </div>
      </Layout>
    );
  }
}

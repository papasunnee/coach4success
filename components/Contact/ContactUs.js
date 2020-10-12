import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <Fragment>
      <div className="head-contact">
        <h2>Contact Us</h2>
      </div>
      <Container style={{ minHeight: "100vh" }}>
        <Row>
          <Col md={{ size: 6, offset: 6 }}>
            <div className="form-wrapper my-5">
              <h3>
                Talk to us today, so we can help you transform all your career
                dreams realities.
              </h3>
              <form
                className="form-horizontal my-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Contact Developer");
                }}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Feedback"
                    rows="4"
                    required
                  />
                </div>
                <button className="btn btn-submit">SEND</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ContactUs;

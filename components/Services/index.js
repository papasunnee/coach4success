import React, { Fragment } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";
import ServiceList from "../Services/Service";
import "./index.scss";

const Service = ({ serviceList = [], bgColor = "#272727" }) => {
  return (
    <Fragment>
      <Container fluid>
        <Row className="p-5">
          <Col md={6}>
            <p style={{ lineHeight: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col md={6}>
            <p style={{ lineHeight: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5" style={{ backgroundColor: "#e5e5e5" }}>
        <Row className="my-5 mx-auto" style={{ maxWidth: "1000px" }}>
          {ServiceList.map(({ key, href, label }) => (
            <div className="col-md-3">
              <Link href={`/service/${href}`}>
                <a className={`service-list mx-auto my-2`}>
                  <div className="service-link">{label}</div>
                </a>
              </Link>
            </div>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        .service-list {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 150px;
          max-width: 300px;
          height: 150px;
          border-radius: 15px;
          background-color: #000;
          text-decoration: none;
        }
        .service-list:hover {
          background-color: #dc1f26;
        }
        .service-link {
          color: #fff;
          font-weight: 600;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};

export default Service;

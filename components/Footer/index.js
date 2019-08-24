import React from "react";
import Link from "next/link";
import "./index.scss";

import MyContainer from "../MyContainer";
import { Col } from "reactstrap";

const Index = () => {
  return (
    <div className="footer">
      <MyContainer>
        <Col md={3}>
          <img
            src="/static/images/logo-dark.png"
            className="img-fluid"
            style={{ width: "100%", maxWidth: "220px", marginBottom: "5px" }}
          />
          <p style={{ fontSize: "12px" }}>Copyright 2018 Coach4Success</p>
        </Col>
        <Col md={3}>
          <h5>ABOUT Coach4Success</h5>
          <ul>
            {FooterAbout.map((footerItem, key) => {
              return (
                <li key={key}>
                  <Link href={footerItem.href}>
                    <a>{footerItem.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col md={3}>
          <h5>POLULAR JOBS</h5>
        </Col>
        <Col md={3}>
          <h5>GET INVOLVED</h5>
          <ul>
            {GetInvolved.map((involved, key) => {
              return (
                <li>
                  <Link href={involved.href}>
                    <a>{involved.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
      </MyContainer>
    </div>
  );
};

export default Index;

const FooterAbout = [
  { label: "About Us", href: "/about" },
  { label: "Team", href: "" },
  { label: "Careers", href: "" },
  { label: "FAQs", href: "" },
  { label: "Contact Us", href: "/contact" },
  { label: "Browse Jobs", href: "" },
  { label: "Browse Companies", href: "" },
  { label: "Terms of Use", href: "" },
  { label: "Privacy Policy", href: "" }
];

const GetInvolved = [
  { label: "For Employers", href: "" },
  { label: "For Career Coaches", href: "" },
  { label: "Send Feedback About Coach4Success", href: "" },
  { label: "Tell A Friend", href: "" }
];

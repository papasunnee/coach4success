import React from "react";
import Link from "next/link";
import MyContainer from "../MyContainer";
import { Col } from "reactstrap";

import "./index.scss";

const Index = () => {
  return (
    <div className="browse">
      <MyContainer>
        <Col md={12}>
          <h2>Browse all of our Career Coaches</h2>
          <p>
            Search all of our coaches and find someone you want to work with
          </p>
          <Link href="">
            <a>FIND A COACH</a>
          </Link>
        </Col>
      </MyContainer>
    </div>
  );
};

export default Index;

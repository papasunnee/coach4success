import React from "react";
import { Container, Row } from "reactstrap";

const MyContainer = ({ children, fluid = false }) => {
  return (
    <Container fluid={fluid}>
      <Row>{children}</Row>
    </Container>
  );
};

export default MyContainer;

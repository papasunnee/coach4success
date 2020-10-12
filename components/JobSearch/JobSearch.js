import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceHeader from "../Services/ServiceHeader";
import ServiceNavigation from "../Services/ServiceNavigation";

const UltimateKit = () => {
  return (
    <Fragment>
      <ServiceHeader headerBg="job-search" title={`Job Search Strategy`} />
      <Container fluid className="py-5 pl-5 m-0">
        <Row>
          <Col md={8} className="px-5">
            <p>
              There are a lot of opportunities out there, but finding the
              desired one at the right time requires skills. Searching for a job
              requires looking at the right place at the right time using the
              right search connection. The process of getting a job can be so
              stressful but with the right searching strategy, it consumes less
              time and energy. With Coach4Success job search strategy, clients
              have more chances of getting their desired jobs both home and
              aboard as soon as possible.
            </p>
            <p>
              Our team of job search professionals have vast knowledge and are
              determined to enable you to become more visible to recruiters
              globally. We examine you, make your profile suitable for your
              desired job in the target organization, and register your profile
              on different job sites and portals to enable you to be more
              visible in a job search by recruiters.
            </p>
          </Col>
          <Col md={4} className="p-0">
            <ServiceNavigation />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UltimateKit;

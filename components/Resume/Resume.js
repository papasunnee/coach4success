import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceHeader from "../Services/ServiceHeader";
import ServiceNavigation from "../Services/ServiceNavigation";

const UltimateKit = () => {
  return (
    <Fragment>
      <ServiceHeader
        headerBg="linkedresume"
        title={`Resume + LinkedIn Review`}
      />
      <Container fluid className="py-5 pl-5 m-0">
        <Row>
          <Col md={8} className="px-5">
            <p>
              There are a lot of people who have the same qualification as you
              in your field and are searching for the same opportunity as you
              are, what makes you stand out in your resume and profile.
              Sometimes writing about yourself can be difficult and you need a
              professional to help you present your details in the simplest and
              catchy manner. Most recruiters have used LinkedIn to search for
              employees and it is important your profile outshine others. Our
              review service helps you get a full resume and LinkedIn profile
              review that will make you ahead of others, establish a connection
              between you and your profile, show your details in a brief catchy
              way, present your values to recruiters, and makes your profile
              attractive, informative and has long long-lasting impacts on
              recruiters
            </p>
            <p>
              With an idea of what recruiters are looking for, we work on your
              skills, talents, experiences, and achievements in your resume and
              LinkedIn profile in order to increase your visibility and chances
              of getting your desired job.
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

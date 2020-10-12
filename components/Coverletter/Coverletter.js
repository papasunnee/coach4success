import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceHeader from "../Services/ServiceHeader";
import ServiceNavigation from "../Services/ServiceNavigation";

const UltimateKit = () => {
  return (
    <Fragment>
      <ServiceHeader headerBg="cover-letter" title={`Cover Letter Writing`} />
      <Container fluid className="py-5 pl-5 m-0">
        <Row>
          <Col md={8} className="px-5">
            <p>
              Cover letters are important as a resume itself when one is
              applying for jobs. Unfortunately, most people attach less time and
              value while writing them. Most of the time, recruiters use the
              cover letter to determine if the applicant deserves an interview
              or not, especially when they have a large number of people
              applying for the job. The cover letter is meant to be catchy
              enough to make the reader flip to the resume attached. It should
              be written to fit only a single.
            </p>
            <p>
              A well-written letter shows your interest, determination, and,
              willingness to go extra for the job, it gives the recruiters a
              permanent impression of you. Our professional cover letter writing
              service also allows experts to write you a cover letter that will
              help you outstand other applicants and increase your chances of
              getting your dream job. We are aimed at making your cover letter
              fit and outshine all others. When you give us details of your
              background, the job your seeking, and your unique strengths,
              experts can give you a professional cover letter within five
              working days with less stress.
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

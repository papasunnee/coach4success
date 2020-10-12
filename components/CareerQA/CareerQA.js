import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceHeader from "../Services/ServiceHeader";
import ServiceNavigation from "../Services/ServiceNavigation";

const UltimateKit = () => {
  return (
    <Fragment>
      <ServiceHeader headerBg="resume" title={`30 Minutes Career Q&A`} />
      <Container fluid className="py-5 pl-5 m-0">
        <Row>
          <Col md={8} className="px-5">
            <p>
              One of the best feelings is getting someone to answer your
              questions as soon as they come up especially when it’s an expert
              giving you the desired answers, we got you covered with our
              30-minute career Q&A services. This service is a 30-minute talk
              session that offers you the opportunity to have a chat with our
              consultant who is always available to answer all your question in
              regard to career, job search, interviews, resumes, or LinkedIn
              challenges and what you need to excel in the desired field.
            </p>
            <p>
              Our consultants are professionals in career planning, resume
              writing, building LinkedIn profiles, job search, and,
              interviewing. Our vast knowledge of the recruitment process and
              extensive connection, keep us updated on current recruits making
              us the right team to answer all your career-related questions. A
              30-minutes session using voice calls, video calls, or even
              physical sessions, can help you overcome career confusion, give
              you immediate feedback on all your questions, a possible way out
              and, a follow-up action plan drafted by our consultant.
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

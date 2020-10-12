import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceHeader from "../Services/ServiceHeader";
import ServiceNavigation from "../Services/ServiceNavigation";

const UltimateKit = () => {
  return (
    <Fragment>
      <ServiceHeader headerBg="resume" title={`Resume Review`} />
      <Container fluid className="py-5 pl-5 m-0">
        <Row>
          <Col md={8} className="px-5">
            <p>
              Whichever method you are using to get a job, you need to submit
              your resume. The first impression a recruiter gets of you even
              without your physical presence is your resume, on the average most
              recruiters spend less than three minutes on a single resume, and
              determines if one deserves an interview or not, making it very
              import for one to have a perfectly tailored resume while applying
              for a specific job. One resume is not suitable for every job
              application, it is important to write your resume with the job
              specification and requirement in mind.
            </p>
            <p>
              Whether you need someone to write a new resume for you or a
              professional touch on your existing resume, we are the right
              contact for that, with our team of experts who have an ae
              knowledge of everything required in producing the perfect resume
              for your desired job within a short period of time with maximum
              results. Allow us to create to te you a hefty resume that will
              exhibit your values and help you get your dream job!
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

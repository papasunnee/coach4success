import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceHeader from "../Services/ServiceHeader";
import ServiceNavigation from "../Services/ServiceNavigation";

const UltimateKit = () => {
  return (
    <Fragment>
      <ServiceHeader headerBg="interview" title={`Interview Coaching`} />
      <Container fluid className="py-5 pl-5 m-0">
        <Row>
          <Col md={8} className="px-5">
            <p>
              Qualification can get you the dream job interview, but the absence
              of interview skills can make you miss out. Making the right first
              impression during an interview is vital, your chances of getting
              your desired job depends largely on your interview skills. One
              should walk into an interview with the confidence of getting the
              job, we believe improving your interview skills places one above
              other candidates and increase one’s chances of getting the job.
              Facts showed that interviewers mostly decide who to recruit within
              the first five minutes of interviews, aside from the main
              interview, your body language, dressing, make-over and, general
              presentation contribute a percentage of the outcome of your
              interview. Getting the dream job interview is difficult enough,
              you can’t afford to miss out on your dream job, allow us to help
              you prepare for your interview.
            </p>
            <p>
              Our interview coaching gives you the opportunity to learn from
              professional and experienced recruiters where you get immediate
              responses to your questions during a mock interview with a full
              evaluation of your verbal and non-verbal expression. We train you
              on how to present yourself in a best suitable manner for the job,
              to excel at interviews you have no experience in the field and,
              also be prepared for unexpected questions either during physical
              or phone call or video sessions, whichever works best for you we
              make sure you are fully prepared for the interview.
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

import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceHeader from "../Services/ServiceHeader";
import ServiceNavigation from "../Services/ServiceNavigation";

const UltimateKit = () => {
  return (
    <Fragment>
      <ServiceHeader headerBg="network" title={`Network Strategy`} />
      <Container fluid className="py-5 pl-5 m-0">
        <Row>
          <Col md={8} className="px-5">
            <p>
              When searching for opportunities, there are a lot of talents out
              there competing for the same position. Leveraging your networking
              is a job search strategy that can boost search efforts and chances
              of landing your desired job. Networking is an art in which one
              interacts, creates connections with people in their field of
              interest which does not always involve physical networking events.
              It is an efficient and cost-effective way to search for your dream
              job, connecting with the right set of people can make the whole
              process easy and fast, normally, networking is a long-term
              strategy and takes almost a year before it shows any outcome, but
              we make sure we fasten the process and create a smaller circle of
              positive people. Typically, your network comprises of people with
              similar interest with you or are more established in your field of
              interest and can refer you to get opportunities. The best job
              mostly goes to the best searcher with the right connection.
              Coach4Success Networking strategy connects our clients with people
              within their defined field of interest.
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

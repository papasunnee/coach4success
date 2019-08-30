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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              mollitia doloribus rem placeat quo vero quasi nam ipsum magni,
              voluptatibus non atque eius harum, itaque, veniam culpa officiis
              autem modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ab maiores quidem tenetur perspiciatis aut hic cum sunt enim
              facilis. Ipsam voluptates facere vero, eaque a fugit amet unde
              delectus aperiam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              mollitia doloribus rem placeat quo vero quasi nam ipsum magni,
              voluptatibus non atque eius harum, itaque, veniam culpa officiis
              autem modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ab maiores quidem tenetur perspiciatis aut hic cum sunt enim
              facilis. Ipsam voluptates facere vero, eaque a fugit amet unde
              delectus aperiam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              mollitia doloribus rem placeat quo vero quasi nam ipsum magni,
              voluptatibus non atque eius harum, itaque, veniam culpa officiis
              autem modi? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ab maiores quidem tenetur perspiciatis aut hic cum sunt enim
              facilis. Ipsam voluptates facere vero, eaque a fugit amet unde
              delectus aperiam!
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

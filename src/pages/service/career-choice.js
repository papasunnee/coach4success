import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import withLayout from "../../hocs/withLayout";
import Header from "../../components/Common/Header";
import ServiceNavigation from "../../components/Common/Service/ServiceNavigation";

const ResumeReview = () => {
  return (
    <Fragment>
      <Header
        headerBg="career-choice"
        title="Career Choice"
        page="Service"
        service
      />
      <Container fluid className="pl-5 m-0">
        <Row>
          <Col md={8} className="p-5">
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

export default withLayout(ResumeReview);

import { Col } from "reactstrap";
import "./index.scss";

const Service = ({ serviceList, bgColor = "#272727" }) =>
  serviceList.map(({ label }) => {
    return (
      <Col md={3}>
        <div
          className="service"
          style={{
            backgroundColor: `${bgColor}`
          }}
        >
          {label}
        </div>
      </Col>
    );
  });

export default Service;

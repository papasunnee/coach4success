import React, { Fragment } from "react";
import { NavItem, NavLink } from "reactstrap";

const Orangeservices = ({ serviceList = [], bgColor = "#272727" }) => {
  return (
    <Fragment>
      {serviceList
        .filter(({ id }) => id == 4)
        .map(({ key, href, label }) => (
          <div className="col-md-3">
            <div className="top-service mx-auto my-2">
              <div className="top-service-link">{label}</div>
            </div>
          </div>
        ))}

      <style jsx>{`
        .top-service {
          background-color: #ff5500;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 150px;
          max-width: 300px;
          height: 150px;
          border-radius: 15px;
        }
        .top-service-link {
          color: #fff;
          font-weight: 600;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};

export default Orangeservices;

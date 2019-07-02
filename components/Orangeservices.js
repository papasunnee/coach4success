import React, { Fragment } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Orangeservices = ({ serviceList = [], bgColor = "#272727" }) => {
  return (
    <Fragment>
      <div className="first-div" style={{ display: "flex", flexWrap: "wrap" }}>
        {serviceList
          .filter(service => {
            return service.category.includes("T");
          })
          .map(({ key, href, label }) => {
            return (
              <NavItem
                key={key}
                style={{
                  listStyleType: "none",
                  padding: "15px"
                }}
              >
                <NavLink
                  href={href}
                  prefetch
                  style={{
                    padding: "40px",
                    borderRadius: "5px",
                    backgroundColor: "#FF5500"
                  }}
                >
                  <div className="label-service" style={{ display: "flex" }}>
                    <div
                      className="top-services"
                      style={{ fontWeight: "bold" }}
                    >
                      {label}
                    </div>
                  </div>
                </NavLink>
              </NavItem>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Orangeservices;

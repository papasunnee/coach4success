import React, { Fragment } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Blackservices = ({ serviceList = [], bgColor = "#272727" }) => {
  return (
    <Fragment>
      <div
        className="first-div"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {serviceList
          .filter(service => {
            return service.category.includes("A");
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
                  className="navlink"
                  href={href}
                  prefetch
                  style={{
                    padding: "40px",
                    borderRadius: "5px",
                    width: "90%",
                    backgroundColor: "#272727"
                  }}
                >
                  <div className="label-service" style={{ display: "flex" }}>
                    <div
                      className="additional-services"
                      style={{ fontWeight: "normal", textAlign: "center" }}
                    >
                      {label}
                    </div>
                  </div>
                </NavLink>
              </NavItem>
            );
          })}
      </div>
      <style>
        {`
        @media (max-width: 500px) {
            .first-div{
                display: flex;
                flex-direction: column;
                padding-left: 50px;
            }
            .navlink{
                width: 50% !important;
            }
        }
      `}
      </style>
    </Fragment>
  );
};

export default Blackservices;

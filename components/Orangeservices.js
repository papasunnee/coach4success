import React, { Fragment } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Orangeservices = ({ serviceList = [], bgColor = "#272727" }) => {
  return (
    <Fragment>
      <div>
        Miracle
        {serviceList.map(({ key, href, label }) => (
          <NavItem key={key}>
            <NavLink href={href} prefetch>
              {/* <NavLink href={href} className={`${this.activeMenu(href)}`}> */}
              <div className="label-service">
                <div className="label-service">{label}</div>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </div>
    </Fragment>
  );
};

export default Orangeservices;

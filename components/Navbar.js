import React, { useState } from "react";
import Link from "next/link";
import Headroom from "react-headroom";
import links from "../routes";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default () => {
  const [state, setState] = useState({ isOpen: false });

  const toggle = () => {
    setState({
      isOpen: !state.isOpen
    });
  };

  return (
    <Headroom
      style={{
        webkitTransition: "all 4s ease-in-out",
        height: "57px",
        zIndex: "1000"
      }}
    >
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">
          <img
            className="img-fluid"
            src="/static/images/logo.png"
            style={{ maxWidth: "170px" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links.map(({ key, href, label }) => (
              <NavItem key={key}>
                <Link href={href}>
                  <a className={`nav-link`}>{label}</a>
                  {/* <a className={`nav-link ${this.activeMenu(href)}`}>{label}</a> */}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </Headroom>
  );
};

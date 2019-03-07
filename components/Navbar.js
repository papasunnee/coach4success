import React from "react";
import Link from "next/link";
import Headroom from "react-headroom";
import SvgLoader from "bv-react-svgloader";
import links from "../routes";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Headroom
        style={{
          webkitTransition: "all 4s ease-in-out"
        }}
      >
        <Navbar color="dark" bg-dark expand="md">
          <NavbarBrand href="/">
            <SvgLoader src="/static/svgs/logo.svg" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(({ key, href, label }) => (
                <NavItem key={key}>
                  <Link href={href} prefetch>
                    <NavLink href={href}>
                      {/* <NavLink href={href} className={`${this.activeMenu(href)}`}> */}
                      {label}
                    </NavLink>
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </Headroom>
    );
  }
}

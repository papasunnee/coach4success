import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import NavLinks from "../../../links/NavLinks";
import "./hamburger.scss";

const Hamburger = () => (
  <Menu right>
    {NavLinks.map(({ label, href, style, download }, key) => {
      return (
        <Link href={href} key={key}>
          <a className={`menu-item`}>{label}</a>
        </Link>
      );
    })}
  </Menu>
);

export default Hamburger;

import React, { Fragment } from "react";
import Hamburger from "./hamburger";
import Link from "next/link";

export const FixedNav = () => (
  <Fragment>
    <div
      className="navbar navbar-default fixed-top px-0"
      role="navigation"
      style={{
        backgroundColor: "#242424",
        zIndex: 1000,
        boxSizing: "border-box"
      }}
    >
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div className="navbar-header">
          <Link href="/" prefetch>
            <a href="/" className="navbar-brand">
              <img
                src="/static/images/logo.png"
                // style={{ maxWidth: "100px" }}
              />
            </a>
          </Link>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Hamburger />
        </div>
      </div>
    </div>
    <div className="clearfix" />
  </Fragment>
);

export const PageTitle = props => (
  <div
    className="container-fluid p-4"
    style={{ backgroundColor: "#0069D2", marginTop: "82px" }}
  >
    <h3 className="px-5 text-light">{props.label} </h3>
  </div>
);

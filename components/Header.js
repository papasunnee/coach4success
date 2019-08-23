import React from "react";
import { Jumbotron } from "reactstrap";
import Navbar from "./Navbar";
import "./scss/Header.scss";

const Header = props => {
  return (
    <div>
      <Navbar />
      <Jumbotron style={{ borderRadius: "0" }}>
        <div className="main">
          <h1 className="display-6">Find A Coach, Find Success</h1>
          <div className="orangeBox">
            Don’t be afraid to take a step in the right direction
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;

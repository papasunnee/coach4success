import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Navbar from "./Navbar";
import "./scss/Header.scss";

const Header = props => {
  return (
    <div>
      <Navbar />
      <Jumbotron
        style={{
          borderRadius: "0"
        }}
      >
        <div>
          <h1 className="display-6">Find A Coach, Find Success</h1>
          <span>Don’t be afraid to take a step in the right direction</span>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;

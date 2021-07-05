import React from "react";
import { Jumbotron } from "reactstrap";
import Navbar from "./Navbar";
import "./scss/Header.scss";

const Header = (props) => {
  return (
    <div>
      <Navbar />
      <div className="video_wrapper">
        <video autoPlay muted loop id="myVideo">
          <source src="/static/video/videoBg.mp4" type="video/mp4" />
        </video>
        <div className="main">
          <h1 className="display-6">Find A Coach, Find Success</h1>
          <div className="orangeBox">
            Don’t be afraid to take a step in the right direction
            <form
              className="form-inline mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Contact Developer");
              }}
            >
              <div className="form-group m-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="FIND A COACH"
                />
                <button className="btn btn-success">search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Jumbotron style={{ borderRadius: "0" }}>
        <div className="main">
          <h1 className="display-6">Find A Coach, Find Success</h1>
          <div className="orangeBox">
            Don’t be afraid to take a step in the right direction
            <form
              className="form-inline mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Contact Developer");
              }}
            >
              <div className="form-group m-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="FIND A COACH"
                />
                <button className="btn btn-success">search</button>
              </div>
            </form>
          </div>
        </div>
      </Jumbotron> */}
    </div>
  );
};

export default Header;

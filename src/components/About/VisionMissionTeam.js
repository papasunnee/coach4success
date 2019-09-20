import React from "react";
import { Paragraph } from "../Common/TextComponent";
import "./VisionMissionTeam.scss";

export default props => {
  return (
    <div className="container-fluid my-5">
      <div className="row" style={{ color: "#fff" }}>
        <div className="col-md-6 p-5" style={{ backgroundColor: "#146CB6" }}>
          <h3>Vision</h3>
          <Paragraph />
          <Paragraph />
        </div>
        <div className="col-md-6 p-5" style={{ backgroundColor: "#231F20" }}>
          <h3>Mission</h3>
          <Paragraph />
          <Paragraph />
        </div>
      </div>
      <div className="row" style={{ color: "#000" }}>
        <div className="col-md-6 p-5" style={{ backgroundColor: "#fff" }}>
          <h3>Team</h3>
          <Paragraph />
          <Paragraph />
        </div>
        <div className="col-md-6 p-0">
          <img
            className="img-fluid"
            src="/static/images/team.jpg"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

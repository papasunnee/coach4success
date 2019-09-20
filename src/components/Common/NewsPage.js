import React from "react";
import { Paragraph } from "./TextComponent";

const NewsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 mb-4">
          <h3 style={{ fontWeight: 700 }}>ALTITUDE TECHNOLOGY WORLDWIDE</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mb-5">
          <img
            className="img-fluid d-block"
            src="/static/images/coverLetter.jpg"
          />
          <p className="mb-5">
            <small>27th August 2019</small>
          </p>
          <Paragraph />
          <Paragraph />
          <Paragraph />
          <Paragraph />
          <Paragraph />
          <Paragraph />
        </div>
        <div className="col-md-4 mb-5">demo</div>
      </div>
    </div>
  );
};

export default NewsPage;

import React from "react";
import { Paragraph } from "./TextComponent";
import "./Policy.scss";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <div className="row py-5 mt-5">
          <div className="col-md-12">
            <h3>PRIVACY POLICY</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="content mb-5 p-5">
              <Paragraph />
              <Paragraph />
              <Paragraph />
              <Paragraph />
              <Paragraph />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;

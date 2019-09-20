import React from "react";
import "./Info.scss";
import { Paragraph } from "../Common/TextComponent";

const Info = () => {
  return (
    <div className="info my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <InfoDetail type="email" />
            <InfoDetail type="phone" />
            <InfoDetail
              type="location"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem, dignissimos fuga fugiat aperiam dolore vel suscipit, dolor, perferendis ut veritatis odio! Accusantium eveniet mollitia deleniti minus possimus eum fugiat."
            />
          </div>
          <div className="col-md-6">
            <Paragraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

const InfoDetail = props => {
  const { type = "email", text = "Lorem, ipsum dolor sit amet " } = props;
  return (
    <div className="infoDetail my-4">
      <img src={`/static/images/contactIcon/${type}.png`} />
      <span>{text}</span>
    </div>
  );
};

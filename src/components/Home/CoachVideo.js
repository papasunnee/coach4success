import React from "react";
import ReactPlayer from "react-player";
import "./CoachVideo.scss";
import { Paragraph } from "../Common/TextComponent";

const CoachVideo = () => {
  return (
    <div className="coachVideo p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 className="my-2 text-center">Find A Coach, Find Success</h3>
            <div className="videoWrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                playing
                width="100%"
              />
            </div>
            <Paragraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachVideo;

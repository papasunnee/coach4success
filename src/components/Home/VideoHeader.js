import React from "react";
import "./VideoHeader.scss";

export default function VideoHeader() {
  return (
    <div className="videoHeader">
      <video autoplay muted loop id="myVideo">
        <source src="/static/videos/videoBg.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="heading">This is your COACH for SUCCESS</h1>
        <p className="subHeading">
          The road to success and the road to failure are almost exactly the
          same because your COACH has tread both
        </p>
      </div>
    </div>
  );
}

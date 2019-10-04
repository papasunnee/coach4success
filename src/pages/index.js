import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Slider from "../components/Home/Slider";
import TextComponent from "../components/Common/TextComponent";
import ServiceDisplay from "../components/Home/ServiceDisplay";
import Steps from "../components/Home/Steps";
import CoachVideo from "../components/Home/CoachVideo";
import LatestNews from "../components/Home/LatestNews";

const Index = props => {
  return (
    <Fragment>
      <Slider />
      <TextComponent double />
      <ServiceDisplay title />
      <Steps />
      <CoachVideo />
      <LatestNews filter />
    </Fragment>
  );
};

export default withLayout(Index);
import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Header from "../components/Common/Header";
import TextComponent from "../components/Common/TextComponent";
import VisionMissionTeam from "../components/About/VisionMissionTeam";

const About = () => {
  return (
    <Fragment>
      <Header headerBg="about" />
      <TextComponent double heading={{ value: "History" }} />
      <VisionMissionTeam />
      <TextComponent double heading={{ value: "Career", center: true }} />
    </Fragment>
  );
};

export default withLayout(About);

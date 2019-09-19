import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Slider from "../components/Home/Slider";
import TextComponent from "../components/Common/TextComponent";

const Index = props => {
  return (
    <Fragment>
      <Slider />
      <TextComponent double />
    </Fragment>
  );
};

export default withLayout(Index);

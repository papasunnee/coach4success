import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Header from "../components/Common/Header";
import TextComponent from "../components/Common/TextComponent";
import ServiceDisplay from "../components/Home/ServiceDisplay";

const Index = props => {
  return (
    <Fragment>
      <Header page="Our Services" headerBg="services" />
      <TextComponent double />
      <ServiceDisplay />
    </Fragment>
  );
};

export default withLayout(Index);

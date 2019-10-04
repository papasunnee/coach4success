import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Header from "../components/Common/Header";
import LatestNews from "../components/Home/LatestNews";

const LatestNewsPage = () => {
  return (
    <Fragment>
      <Header page="Insight" headerBg="latestNews" />
      <LatestNews />
    </Fragment>
  );
};

export default withLayout(LatestNewsPage);

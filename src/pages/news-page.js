import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Header from "../components/Common/Header";
import NewsPage from "../components/Common/NewsPage";

const LatestNewsPage = () => {
  return (
    <Fragment>
      <Header page="Insight" headerBg="latestNews" />
      <NewsPage />
    </Fragment>
  );
};

export default withLayout(LatestNewsPage);

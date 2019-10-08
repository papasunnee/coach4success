import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Header from "../components/Common/Header";
import Faq from "../components/Faq";

const FAQs = () => {
  return (
    <Fragment>
      <Header page="FAQs" headerBg="contact" />
      <Faq />
    </Fragment>
  );
};

export default withLayout(FAQs);

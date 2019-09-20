import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Policy from "../components/Common/Policy";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Policy />
    </Fragment>
  );
};

export default withLayout(PrivacyPolicy);

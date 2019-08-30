import React, { Fragment } from "react";
import ResumeReview from "../../components/ResumeReview/ResumeReview";
import Service from "../../components/Services/Service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";

const resumereview = () => {
  return (
    <Fragment>
      <Navbar />
      <ResumeReview serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default resumereview;

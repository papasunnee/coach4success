import React, { Fragment } from "react";
import JobSearch from "../../components/JobSearch/JobSearch";
import Service from "../../components/Services/Service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";

const jobsearch = () => {
  return (
    <Fragment>
      <Navbar />
      <JobSearch serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default jobsearch;

import React, { Fragment } from "react";
import Resume from "../components/Resume/Resume";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const resume = () => {
  return (
    <Fragment>
      <Navbar />
      <Resume serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default resume;

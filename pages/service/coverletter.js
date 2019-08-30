import React, { Fragment } from "react";
import Coverletter from "../../components/Coverletter/Coverletter";
import Service from "../../components/Services/Service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";

const coverletter = () => {
  return (
    <Fragment>
      <Navbar />
      <Coverletter serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default coverletter;

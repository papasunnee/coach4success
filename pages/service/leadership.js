import React, { Fragment } from "react";
import Leadership from "../../components/Leadership/Leadership";
import Service from "../../components/Services/Service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";

const resume = () => {
  return (
    <Fragment>
      <Navbar />
      <Leadership serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default resume;

import React, { Fragment } from "react";
import CareerQA from "../../components/CareerQA/CareerQA";
import Service from "../../components/Services/Service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";

const qa = () => {
  return (
    <Fragment>
      <Navbar />
      <CareerQA serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default qa;

import React, { Fragment } from "react";
import Index from "../components/Services";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const services = () => {
  return (
    <Fragment>
      <Navbar />
      <Index serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default services;

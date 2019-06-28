import React, { Fragment } from "react";
import CareerRut from "../components/CareerRut/CareerRut";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const careerRut = () => {
  return (
    <Fragment>
      <Navbar />
      <CareerRut serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default careerRut;

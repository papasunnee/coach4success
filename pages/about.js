import React, { Fragment } from "react";
import AboutUs from "../components/About/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const about = () => {
  return (
    <Fragment>
      <Navbar />
      <AboutUs />
      <Footer />
    </Fragment>
  );
};

export default about;

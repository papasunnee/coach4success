import React, { Fragment } from "react";
import AboutUs from "../components/About/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import Empty from "../components/Empty";

const about = () => {
  return (
    <Fragment>
      <Navbar />
      <AboutUs />
      <Empty />
      <Footer />
    </Fragment>
  );
};

export default about;

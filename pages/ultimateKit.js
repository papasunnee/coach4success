import React, { Fragment } from "react";
import UltimateKit from "../components/UltimateKit/UltimateKit";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const ultimateKit = () => {
  return (
    <Fragment>
      <Navbar />
      <UltimateKit serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default ultimateKit;

import React, { Fragment } from "react";
import Network from "../components/Network/Network";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const network = () => {
  return (
    <Fragment>
      <Navbar />
      <Network serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default network;

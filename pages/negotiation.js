import React, { Fragment } from "react";
import Negotiation from "../components/Negotiation/Negotiation";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const negotiation = () => {
  return (
    <Fragment>
      <Navbar />
      <Negotiation serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default negotiation;

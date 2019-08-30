import React, { Fragment } from "react";
import Interview from "../../components/Interview/Interview";
import Service from "../../components/Services/Service";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/index";

const interview = () => {
  return (
    <Fragment>
      <Navbar />
      <Interview serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default interview;

import React, { Fragment } from "react";
import Newmanager from "../components/Newmanager/Newmanager";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const newManager = () => {
  return (
    <Fragment>
      <Navbar />
      <Newmanager serviceList={Service} />
      <Footer />
    </Fragment>
  );
};

export default newManager;

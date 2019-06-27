import React, { Fragment } from "react";
import GetInvolved from "../components/GetInvolved/GetInvolved";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const getinvolved = () => {
  return (
    <Fragment>
      <Navbar />
      <GetInvolved />
      <Footer />
    </Fragment>
  );
};

export default getinvolved;

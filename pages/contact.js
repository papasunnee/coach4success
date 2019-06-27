import React, { Fragment } from "react";
import ContactUs from "../components/Contact/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const contact = () => {
  return (
    <Fragment>
      <Navbar />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default contact;

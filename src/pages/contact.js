import React, { Fragment } from "react";
import withLayout from "../hocs/withLayout";
import Header from "../components/Common/Header";
import Info from "../components/Contact/Info";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <Header page="Contact" headerBg="contact" />
      <Info />
      <ContactForm />
    </Fragment>
  );
};

export default withLayout(Contact);

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FixedNav } from "../components/Common/Header/FixedNav";

const withLayout = WrappedComponent => {
  const WithLayout = props => {
    return (
      <div className="container-fluid p-0">
        {/* <Navbar /> */}
        <FixedNav />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
  return WithLayout;
};

export default withLayout;

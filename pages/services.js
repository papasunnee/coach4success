import React, { Fragment } from "react";
import { Jumbotron } from "reactstrap";
import Index from "../components/Services";
import Service from "../components/Services/Service";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";

const services = () => {
  return (
    <Fragment>
      <Navbar />
      <Jumbotron
        style={{
          borderRadius: "0"
        }}
      >
        <h2>Our Services</h2>
      </Jumbotron>
      <Index serviceList={Service} />
      <Footer />
      <style>
        {`
        .jumbotron{
            background-image: url(/static/services/head.png);
            margin-bottom: 0;
            min-height: 70vh;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position : relative ;
          }
          .jumbotron h2{
            position : absolute ;
            bottom : 0px ;
            padding: 0px 0px 20px 25px;
            font-weight: bold;
            color: #fff;
          }
      `}
      </style>
    </Fragment>
  );
};

export default services;

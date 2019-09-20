import React from "react";
import Link from "next/link";
import { ServicesLinks } from "../Footer";
import "./ServiceDisplay.scss";

const ServiceDisplay = ({ title = null }) => {
  return (
    <div
      className="serviceDisplay py-5"
      style={{ backgroundColor: `${title ? "" : "#E5E5E5"}` }}
    >
      <div className="container my-5">
        {title && (
          <div className="row">
            <div className="col-md-12 my-3">
              <h3 className="text-center">Services</h3>
            </div>
          </div>
        )}
        <div className="row">
          {ServicesLinks.map(({ label, href }, key) => (
            <div className="col-md-3">
              <Link href={`/service${href}`}>
                <a className={`service-list mx-auto my-2`}>
                  <div className="service-link">{label}</div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDisplay;

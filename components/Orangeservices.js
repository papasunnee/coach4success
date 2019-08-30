import React, { Fragment } from "react";
import Link from "next/link";

const Orangeservices = ({
  serviceList = [],
  bgColor = "#272727",
  id: serviceId
}) => {
  return (
    <Fragment>
      {serviceList
        .filter(({ id }) => id == serviceId)
        .map(({ key, href, label }) => (
          <div className="col-md-3">
            <Link href={`service/${href}`}>
              <a
                className={`top-service mx-auto my-2 ${
                  serviceId == 4 ? `red` : `black`
                }`}
              >
                <div className="top-service-link">{label}</div>
              </a>
            </Link>
          </div>
        ))}
      <style jsx>{`
        .top-service {
          display: flex;
          color: #000;
          justify-content: center;
          align-items: center;
          min-width: 150px;
          max-width: 300px;
          height: 150px;
          border-radius: 15px;
          background-color: #dadada;
          text-decoration: none;
        }
        .red:hover {
          background-color: #dc1f26;
        }
        .red:hover .top-service-link,
        .black:hover .top-service-link {
          color: #fff;
        }
        .black:hover {
          background-color: #272727;
        }
        .top-service-link {
          color: #000;
          font-weight: 600;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};

export default Orangeservices;

import React, { Fragment } from "react";

import "./ServiceHeader.scss";

export default ({ headerBg, title = null }) => {
  return (
    <Fragment>
      <div className="serviceHeader">
        <h2>
          Our Services <span className="red">/ {title}</span>
        </h2>
      </div>
      <style jsx>
        {`
          .serviceHeader {
            background-image: url(/static/images/services/${headerBg}.jpg);
          }
        `}
      </style>
    </Fragment>
  );
};

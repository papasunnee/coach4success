import React, { Fragment } from "react";

import "./Header.scss";

export default props => {
  const {
    page = "About",
    headerBg = "about",
    title = null,
    light = false,
    service = false
  } = props;
  const imageUrl = service
    ? `url(/static/images/services/${headerBg}.jpg)`
    : `url(/static/images/${headerBg}.jpg)`;
  return (
    <Fragment>
      <div className="jumbotron jumbotron-container serviceHeader">
        <h2 className={light ? "light" : "dark"}>
          {page} {title && <span className="red">/ {title}</span>}
        </h2>
      </div>
      <style jsx>
        {`
          .serviceHeader {
            background-image: ${imageUrl};
          }
        `}
      </style>
    </Fragment>
  );
};

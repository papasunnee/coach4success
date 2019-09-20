import React from "react";
import "./TextComponent.scss";

export default props => {
  const {
    double = false,
    single = false,
    heading = { center: false, value: null }
  } = props;
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h3
            className={heading.center ? "text-center" : null}
            style={{ fontWeight: 700 }}
          >
            {heading.value}
          </h3>
        </div>
      </div>
      <div className="row">
        {double && (
          <>
            <div className="col-md-6">
              <Paragraph />
            </div>
            <div className="col-md-6">
              <Paragraph />
            </div>
          </>
        )}
        {single && (
          <div className="col-md-12">
            <Paragraph />
          </div>
        )}
      </div>
    </div>
  );
};

export const Paragraph = () => {
  return (
    <p className="my-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea
      molestiae unde eveniet numquam explicabo recusandae nobis asperiores
      porro, officia nisi aut tenetur velit nam quisquam optio illum enim quas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea
      molestiae unde eveniet numquam explicabo recusandae nobis asperiores
      porro, officia nisi aut tenetur velit nam quisquam optio illum enim quas?
    </p>
  );
};

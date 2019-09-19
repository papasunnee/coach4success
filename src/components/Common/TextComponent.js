import React from "react";

export default ({ double = false, single = false }) => {
  return (
    <div className="container my-5">
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

const Paragraph = () => {
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

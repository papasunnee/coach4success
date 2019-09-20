import React from "react";
import "./Steps.scss";
const Steps = () => {
  return (
    <div className="howItWorks py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-3">
            <h3 className="text-center">How it Works</h3>
          </div>
        </div>
        <div className="row">
          {StepList.map((option, key) => (
            <div className="col-md-3" key={key}>
              <StepBox option={option} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center moreQuestion my-5">
              <span>More questions on what to expect?</span> Head on over to our{" "}
              <span>Coaching FAQs or contact one of our career experts</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepList = [
  {
    id: "1",
    name: "Choose a service",
    description:
      "Find the best coaching option to help you tackle (and overcome) your current career obstacle.",
    svg: ""
  },
  {
    id: "2",
    name: "Book a Career Coach",
    description:
      "Explore our roster of top-notch career coaches who provide the service you need. Check out reviews from other customers to help you pick the right one.",
    svg: ""
  },
  {
    id: "3",
    name: "Book a Career Coach",
    description:
      "Explore our roster of top-notch career coaches who provide the service you need. Check out reviews from other customers to help you pick the right one.",
    svg: ""
  },
  {
    id: "4",
    name: "Book a Career Coach",
    description:
      "Explore our roster of top-notch career coaches who provide the service you need. Check out reviews from other customers to help you pick the right one.",
    svg: ""
  }
];

export default Steps;

const StepBox = ({ option = {} }) => {
  const { id, name, description } = option;
  return (
    <div className="stepBox">
      <div className="title">Step {id}</div>
      <div className="image">
        <img src={`/static/images/svgs/${id}.png`} />
      </div>
      <hr />
      <h6>{name}</h6>
      <p className="description">{description}</p>
    </div>
  );
};

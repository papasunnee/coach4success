import React from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { Col } from "reactstrap";
import MyContainer from "../MyContainer";

import "./index.scss";

export default () => {
  return (
    <section className="findCoach">
      <MyContainer>
        <Col md={7}>
          <Coach />
        </Col>
        <Col md={5}>
          <News />
        </Col>
      </MyContainer>
    </section>
  );
};

const News = () => {
  return (
    <div className="newsSection">
      <ul className="timeline">
        <h2>Latest News</h2>
        {[1, 2, 3, 4].map(x => {
          return (
            <li>
              <Link href="">
                <a>Available Job Openings</a>
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem beatae amet explicabo itaque cum debitis qui, dicta
                ut suscipit dolorem ab, earum quas est hic laboriosam veniam
                tempora consectetur omnis! beatae amet explicabo itaque cum
                debitis qui, dicta ut suscipit dolorem ab, earum quas est hic
                laboriosam veniam tempora consectetur omnis!
              </p>
            </li>
          );
        })}
        <div style={{ height: "20px" }}></div>
      </ul>
    </div>
  );
};

const Coach = () => {
  return (
    <div className="coachVideo">
      <h2>Find A Coach, Find Success</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing={false}
        style={{ maxWidth: "560px" }}
      />
      <p className="my-4" style={{ maxWidth: "560px", lineHeight: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

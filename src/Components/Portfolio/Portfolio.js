import React from "react";

import Card from "../Card/Card";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <React.Fragment>
      <Card>
        <section className="main">
          <div className="container">
            <div className="upper-container">
              <div className="img-src">
                <img src="../Image/profile-pic(2)" alt="" />
                <ul className="bio">
                  <li>Yoga</li>
                  <li>Wellness</li>
                  <li>Fitness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div></div>
      </Card>
      <div className="image">
        <img
          src="https://media.istockphoto.com/vectors/the-gray-pattern-of-lines-vector-id1130886250?s=612x612"
          alt="MacBook image"
        />
      </div>
    </React.Fragment>
  );
};

export default Portfolio;

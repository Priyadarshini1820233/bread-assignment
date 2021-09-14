import React from "react";

import Card from "../Card/Card";
import "./Portfolio.css";

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;

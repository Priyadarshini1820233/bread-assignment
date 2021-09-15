import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="heading">
        <center>BROWSE ALL MY OFFERINGS</center>
      </div>
      <div className="yoga-image">
        <img
          className="img1"
          src="https://estaticos.marie-claire.es/media/cache/1140x_thumb/uploads/images/gallery/55ddbae6297b76fa347f7246/captura-de-pantalla-2020-04-01-a-las-13-09-54.jpg"
          alt="Yoga pose 1"
        />
        <img
          className="img2 active"
          src="https://images.samsung.com/is/image/samsung/assets/global/mkt/explore/global/wellbeing/simple-steps-to-your-best-ever-morning-routine-/mobile/EO0069_explore_Best_morning_routine_sub4_658x439_mo.png?$FB_TYPE_J_F_MO_PNG$"
          alt="Yoga pose 2"
        />
        <img
          className="img3"
          src="https://estaticos.marie-claire.es/media/cache/1140x_thumb/uploads/images/gallery/55ddbae6297b76fa347f7246/captura-de-pantalla-2020-04-01-a-las-13-09-54.jpg"
          alt="Yoga pose 3"
        />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Footer;

import React from "react";
import Footer from "./Footer";

import "./FooterBase.css";

const FooterBase = () => {
  return (
    <div>
      <div className="footerBase"></div>
      <footer className="footer2">
        <div className="container">
          <div className="row">
            <div className="footer-col1">
              <h4>Powered by bread</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-col2">
              <h4>Bread 2021 All rights reserved</h4>
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  {" "}
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
};

export default FooterBase;

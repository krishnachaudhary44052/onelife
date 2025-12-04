import React from "react";
import "../Styles/ComingSoon.css";
import Header from "./Header";
import Footer from "./Footer"

export default function ComingSoon() {
  return (
    <>
    <Header/>
    <div className="cs-wrapper">
      <div className="cs-card">
        <div className="cs-glow"></div>

        <h1 className="cs-title">Coming Soon</h1>

        <p className="cs-text">
          Something exciting is on the way. Stay tuned for an amazing
          experience!
        </p>

        <div className="cs-loader">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

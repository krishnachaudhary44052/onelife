import React from "react";
import '../Styles/SaladAboutUs.css'; 

import { Link } from "react-router-dom";

const SaladHeroSection = ({ visual }) => {
  const btnVisible = Boolean(visual);

  return (
    <section className="salad-about-section">
      {/* <h1 className="text-center py-3 salad-title1">{title}</h1> */}
      <div className="container salad-container py-4">

        <div className="row align-items-center">

          <div className="col-lg-6 col-md-12 salad-image-col">
            <div className="row g-2">
              <div className="col-6 outter-class">
                <img
                  src="/Images/PXL_20250407_074130474.jpg"
                  alt="Salad brand story"
                  className="salad-image-fluid salad-rounded salad-shadow-sm"
                />
              </div>
              <div className="col-6 innerclass">
                <div className="mb-2">
                  <img
                    src="/Images/20250407_131258.jpg"
                    alt="Salad preparation"
                    className="salad-image-fluid salad-rounded salad-shadow-sm"
                  />
                </div>
                <div>
                  <img
                    src="/Images/IMG_9103.jpg"
                    alt="Salad ingredients"
                    className="salad-image-fluid salad-rounded salad-shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 salad-text-col">
            
            <h3 className="salad-about-title">Every Movement Begins With a Moment</h3>
            <p className="salad-about-text">

              After hundreds of conversations, we understood something deeply important: 

Elders do not fear aging. 
They fear aging alone. 

TuHiTu Onelife Circle was created to ensure they never have to. 

We designed a structured community program  supported by trained volunteers, wellness experts, and emotional care specialists  that brings companionship back into the lives of seniors who have lost it. 

Our movement began with their stories. 
It continues with our responsibility to honor them. 

And it grows every day through every volunteer who chooses to sit, listen, and bring life back into someone’s ordinary day. 

            </p>
            <p className="salad-about-text">

              We realized elders didn’t need more services. 
They needed more humans. 

Not caretakers. 
Not attendants. 
Not medical staff. 
            </p>
            <ul>
              <li>They needed Companions. Individuals who could: </li>
        <li>Spend time without rushing </li>
        <li>Listen without distraction </li>
        <li>Offer presence without judgment  </li>
        <li>Rebuild confidence and dignity through simple human interactions </li>
      </ul>
            <p className="salad-about-text">
             The TuHiTu Companion (Volunteer) Pillar became the backbone of our movement the very heart of TuHiTu Onelife Circle. 
            </p>
            {btnVisible && (
              <Link to="/about">
                {/* <button className="btn1 salad-about-btn ">Our Story</button> */}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaladHeroSection;

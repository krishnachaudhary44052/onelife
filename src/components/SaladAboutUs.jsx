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

              During months of research, interactions, and field visits, our team met elders across different cities and living situations. We observed something universal — despite having homes, families, and basic comfort, many elders carried a silent emotional burden. 

            </p>
            <p className="salad-about-text">

              Their homes were full of memories, 
but their days were empty of companionship. 

            </p>
            <p className="salad-about-text">

              Some shared that their children were busy with work and life commitments. Others said they hesitated to call because they didn’t want to disturb anyone. Many described spending entire days without hearing their own name spoken aloud. 

            </p>
            <p className="salad-about-text">
              In old-age homes, we saw elders who once led vibrant lives now living behind quiet walls. They carried the weight of abandonment, the ache of being forgotten, and the fear of becoming a burden. 

These experiences were not isolated. 
They repeated from home to home, person to person, story to story. 
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

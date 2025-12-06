import React from "react";
import "../Styles/Card.css";
import { ArrowRight } from "lucide-react";

const Card = ({ img, title, desc, bgColor, textColor }) => {
  return (
    <div className="custom-card">
      <img src={img} alt={title} className="card-img" />

      <div className="card-content" style={{ backgroundColor: bgColor, color: textColor }}>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>

        {/* <button className="card-btn">
          Know more <ArrowRight size={18} />
        </button> */}
      </div>
    </div>
  );
};

export default Card;

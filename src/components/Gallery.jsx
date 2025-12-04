import React from "react";
import "../Styles/Gallery.css";

export default function Gallery() {
  const images = [
    "/Images/img.webp",
    "/Images/img.webp",
    "/Images/img.webp",
    "/Images/img.webp",
    "/Images/img.webp",
    "/Images/img.webp",
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt="Gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}

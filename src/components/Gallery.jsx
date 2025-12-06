import React from "react";
import "../Styles/Gallery.css";

export default function Gallery() {
  const images = [
    "/Images/IMG_7149.jpg",
    "/Images/IMG_8986.jpg",
    "/Images/IMG_8977.jpg",
    "/Images/IMG_8748.JPG",
    "/Images/PXL_20250407_074158827.jpg",
    "/Images/IMG_8669.JPG",
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

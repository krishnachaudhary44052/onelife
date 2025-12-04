import React, { useState } from "react";
import Card from "./Card";
import "../Styles/ModernSlider.css";

const images = [
    { src: "/Images/PXL_20250407_074158827.jpg", caption: "Classic Living", desc: "An AI-powered kiosk for public hospitals, offering quick registrations, symptom checks, and ABHA IDs. Designed for rural, high-footfall facilities.", bgColor: "rgb(92, 27, 27)", textColor: "#ffffff" },
    { src: "/Images/IMG_9103.jpg", caption: "Royal Bedroom", desc: "An AI-powered kiosk for public hospitals, offering quick registrations, symptom checks, and ABHA IDs. Designed for rural, high-footfall facilities.", bgColor: "rgb(92, 27, 27)", textColor: "#ffffff" },
    { src: "/Images/IMG_9056.JPG", caption: "Nature Home", desc: "An AI-powered kiosk for public hospitals, offering quick registrations, symptom checks, and ABHA IDs. Designed for rural, high-footfall facilities.", bgColor: "rgb(92, 27, 27)", textColor: "#ffffff" },
    { src: "/Images/IMG_3963.jpg", caption: "Luxury Lounge", desc: "An AI-powered kiosk for public hospitals, offering quick registrations, symptom checks, and ABHA IDs. Designed for rural, high-footfall facilities.", bgColor: "rgb(92, 27, 27)", textColor: "#ffffff" },
    { src: "/Images/IMG_7159.jpg", caption: "Modern Interior", desc: "An AI-powered kiosk for public hospitals, offering quick registrations, symptom checks, and ABHA IDs. Designed for rural, high-footfall facilities.", bgColor: "rgb(92, 27, 27)", textColor: "#ffffff" },
];

export default function ModernSlider() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">

            <div className="ourWork">
                <h1>
                    Grandpal’s stories about their experience!
                </h1>
            </div>
            <button className="arrow left" onClick={prevSlide}>
                ❮
            </button>

            <div className="slider">
                {images.map((img, i) => {
                    let position = "hidden";

                    const left2 = (index - 2 + images.length) % images.length;
                    const left1 = (index - 1 + images.length) % images.length;
                    const right1 = (index + 1) % images.length;
                    const right2 = (index + 2) % images.length;

                    if (i === index) position = "center";
                    else if (i === left1) position = "left1";
                    else if (i === right1) position = "right1";
                    else if (i === left2) position = "left2";
                    else if (i === right2) position = "right2";

                    return (
                        <div key={i} className={`slide ${position}`}>
                            <Card
                                img={img.src}
                                title={img.caption}
                                desc={img.desc}
                                bgColor={img.bgColor}
                                textColor={img.textColor}
                            />
                          
                        </div>
                    );
                })}
            </div>
            <button className="arrow right" onClick={nextSlide}>
                ❯
            </button>
        </div>

    );
}

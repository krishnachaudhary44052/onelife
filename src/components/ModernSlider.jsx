import React, { useState } from "react";
import Card from "./Card";
import "../Styles/ModernSlider.css";

const images = [
    { src: "/Images/PXL_20250407_074158827.jpg", caption: "Regular companionship visits ", desc: "A Companion is not someone who serves  a Companion is someone who listens, understands, and brings life back into someone’s ordinary day.", bgColor: "rgba(122, 65, 65, 1)", textColor: "#ffffff" },
    { src: "/Images/IMG_9103.jpg", caption: "Dedicated helpline support ", desc: "When you volunteer with TuHiTu Onelife Circle, you don’t just support an elder — you restore dignity, warmth, and belonging to a life that needs it.", bgColor: "rgba(122, 65, 65, 1)", textColor: "#ffffff" },
    { src: "/Images/IMG_9056.JPG", caption: "Therapy and wellness services ", desc: "Every hour you give becomes a memory for someone. Every conversation you share becomes a reason for someone to smile again.", bgColor: "rgba(122, 65, 65, 1)", textColor: "#ffffff" },
    { src: "/Images/IMG_3963.jpg", caption: "Emotional guidance", desc: "Being a Companion is not about changing a life it’s about walking alongside someone so they remember they are never alone.", bgColor: "rgba(122, 65, 65, 1)", textColor: "#ffffff" },
    { src: "/Images/IMG_7159.jpg", caption: "Social gatherings, meet-ups, and events ", desc: "A single conversation, a shared laugh, or simply being present these are the small acts that make the biggest difference in an elder’s life.", bgColor: "rgba(122, 65, 65, 1)", textColor: "#ffffff" },
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
                    Tuhitu One Life Circle offers
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

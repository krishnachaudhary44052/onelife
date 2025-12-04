import React, { useEffect, useRef } from "react";
import "../Styles/RightWindow.css";

export default function RightWindow({ title, content, image }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("animate");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="right-window-container" ref={sectionRef}>
      <div className="right-window-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>

      <div className="right-window-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

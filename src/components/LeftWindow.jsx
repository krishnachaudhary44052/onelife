import React, { useEffect, useRef } from "react";
import "../Styles/LeftWindow.css";

export default function LeftWindow({ title, content, image }) {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="left-window-container" ref={sectionRef}>
      <div className="left-window-image">
        <img src={image} alt={title} />
      </div>

      <div className="left-window-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

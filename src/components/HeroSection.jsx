import "../Styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
      const navigate = useNavigate();
  return (
    <section className="HeroSection-container">
      <div className="HeroSection-content">
        <h1>TuHiTu OneLife</h1>
        <h3>One Life. One Circle. A Community Built on Human Connection. </h3>
        <h3>Aging is meant to be a peaceful chapter of life, yet for countless elders, it quietly becomes a chapter of isolation. As the world around them races forward, their days grow quieter, phone calls become shorter, and conversations become rare. Despite living in the same homes, many elders feel distant from the people they love the most.
</h3>
        <button
  className="HeroSection-button"
  onClick={() => navigate("/Contact")}
                    >
  Join The Trail!
</button>
      </div>

      <div className="HeroSection-image">
        <img src="/Images/IMG_8695.jpg" alt="Hero Visual" />
      </div>
    </section>
  );
}
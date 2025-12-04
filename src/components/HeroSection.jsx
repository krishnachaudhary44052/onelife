import "../Styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="HeroSection-container">
      <div className="HeroSection-content">
        <h1>TuHiTu OneLife</h1>
        <h3>Because Parents Deserve a Life as Beautiful as the One They Gave Us.</h3>
        <h3>Companionship That Feels Like Family
Compassionate, lively youth creating meaningful moments for elders
</h3>
        <button className="HeroSection-button">Join The Trail!</button>
      </div>

      <div className="HeroSection-image">
        <img src="/Images/IMG_8695.jpg" alt="Hero Visual" />
      </div>
    </section>
  );
}
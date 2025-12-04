import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    setActive(item);
    setMenuOpen(false);
  };

  return (
    <header className="Header-container">
      <div className="Header-logo-row">
        <img src="/Images/Logo with Three Pairs of Hands (2).png" alt="Logo" className="Header-logo" />
        <button className="Header-hamburger" onClick={() => setMenuOpen(true)}>
          &#9776;
        </button>
      </div>
      <nav className="Header-nav">
        <ul className="Header-nav-links ">
          <li className={active === "home" ? "active" : ""}>
            <Link to="/" onClick={() => handleClick("home")}>Home</Link>
          </li>

          <li className={active === "about" ? "active" : ""}>
            <Link to="/About" onClick={() => handleClick("about")}>About</Link>
          </li>

          <li className={active === "service" ? "active" : ""}>
            <Link to="/WhatWeOffer" onClick={() => handleClick("service")}>What we Offer</Link>
          </li>

          <li className={active === "events" ? "active" : ""}>
            <Link to="/WhoGain" onClick={() => handleClick("events")}>What you gain</Link>
          </li>

          <li className={active === "press" ? "active" : ""}>
            <Link to="/HowSeniorsBenefits" onClick={() => handleClick("press")}>How Seniors Benefits</Link>
          </li>

          <li className={active === "contact" ? "active" : ""}>
            <Link to="/Contact" onClick={() => handleClick("contact")}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className={`Header-mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="Header-close" onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          <li><Link to="/" onClick={() => handleClick("home")}>Home</Link></li>
          <li><Link to="/About" onClick={() => handleClick("about")}>About</Link></li>
          <li><Link to="/Service" onClick={() => handleClick("service")}>Service</Link></li>
          <li><Link to="/Events" onClick={() => handleClick("events")}>Events</Link></li>
          <li><Link to="/Press" onClick={() => handleClick("press")}>Press</Link></li>
          <li><Link to="/Faqs" onClick={() => handleClick("faqs")}>FAQs</Link></li>
          <li><Link to="/Careers" onClick={() => handleClick("careers")}>Careers</Link></li>
          <li><Link to="/Contact" onClick={() => handleClick("contact")}>Contact Us</Link></li>
        </ul>
      </div>
    </header>
  );
}

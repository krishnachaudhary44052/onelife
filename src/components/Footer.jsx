import React from "react";
import "../Styles/Footer.css";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-title">Follow us along our journey</h2>
      <div className="social-icons">
        <FaInstagram />
        <FaLinkedinIn />
        <FaYoutube />
        <FaFacebookF />
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          <img src="/Images/2.png" alt="logo" />
        </div>

        <div className="footer-contact">
          <h3>Contact number</h3>
          <p className="small">(open from Monday to Friday from 10AM-6PM):</p>

          <a href="tel:+918779524307" className="contact-link">
            +91 87795 24307
          </a>

          <h3>Email :</h3>

          <a href="mailto:contact@thegoodfellows.in" className="contact-link">
            contact@thegoodfellows.in
          </a>
          <a href="mailto:careers@thegoodfellows.in" className="contact-link">
            careers@thegoodfellows.in
          </a>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/events">Events</a>
        </div>

        <div className="footer-links">
          <a href="/press">Press</a>
          <a href="/faqs">FAQs</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import "../Styles/FAQ.css";
import Header from "./Header";
import Footer from "./Footer";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  const faqData = [
    {
      question: "Who can join Tuhitu Onelife Circle",
      answer: `Anyone seeking better health, recovery, stress relief, or long-term wellness. `
    },
    {
      question: "Do I need prior wellness experience? ",
      answer: `No. Our experts guide you at every stage. `
    },
    {
      question: "Is medical support included? ",
      answer: `Yes. Doctor consultations and health assessments are part of the structure. `
    },
    {
      question: "Can I join online? ",
      answer: `Yes, both in-person and remote support options are available.`
    },
    {
      question: "How soon will I see results?",
      answer: `Most individuals experience noticeable shifts within 2–4 weeks. `
    }
  ];

  return (
    <>
      <Header />

      <div className="faq-wrapper">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{active === index ? "-" : "+"}</span>
              </div>

              {active === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

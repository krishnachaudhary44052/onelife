import React, { useState } from "react";
import "../Styles/FAQ.css";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I get started?",
      answer: `We’re so glad you’re here! To get started, click on the sign-up button 
      that says ‘Join The Trial’ and fill in the form that appears. Our team will 
      reach out to you within 48 hours to match you with your perfect companion.
      If you need any assistance, please reach out to us at +91 8779524307 
      from Monday to Friday between 10 AM to 6 PM. We’re always here to help.`
    },
    {
      question: "How are the Goodfellows and Grandpals matched?",
      answer: `Your Goodfellows are young, educated graduates from different backgrounds, 
      who have been vetted for empathy using psychometric tests and background verification.
      We do our best to match Goodfellows with Grandpals keeping in mind interests,
      backgrounds, and comfort. We will be in constant touch with you to ensure you are happy.`
    },
    {
      question: "Is this a paid service? Why?",
      answer: `Your first few sessions with the Goodfellow are entirely free. If you are happy, 
      you can continue with a paid subscription. If not, no money will be charged.
      To provide Goodfellows with respectable salaries and ensure long-term companionship, 
      this is a paid service.`
    }
  ];

  return (
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

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
      question: "What is TuHiTu Onelife Circle?",
      answer: `TuHiTu Onelife Circle is a community-based companionship initiative designed to support elders through emotional care, social engagement, and wellbeing activities. Each elder is paired with trained Companions who offer connection, guidance, and support. `
    },
    {
      question: "Which areas do you serve?",
      answer: `We currently operate in Delhi NCR, Gurgaon, Noida and are expanding to Panchkula, Mohali, and Chandigarh. `
    },
    {
      question: "Is medical support included? ",
      answer: `No. Companions are available on-call and through scheduled visits. Their role is to connect, support, and engage not to replace family or full-time caregivers. `
    },
    {
      question: "What kind of activities are included in this program? ",
      answer: `Companions engage elders through conversations, outings, events, wellness sessions, games, hobbies, appointments, check-ins, and emotional support. `
    },
    {
      question: "Who can become a Companion? ",
      answer: `Any responsible, empathetic individual  who genuinely wants to bring positivity, support, and connection to an elder’s life.`
    },
    {
      question: "Do volunteers require any prior experience? ",
      answer: `No experience is required.`
    },
    {
      question: "What is the role of a Companion?",
      answer: `A Companion’s role is to provide emotional presence, conversation, support in activities, accompany elders to events/outings, and ensure they feel valued and heard. `
    },
    {
      question: "How much time do volunteers need to commit?",
      answer: `We encourage flexible volunteering. Depending on availability, a Companion may visit weekly, attend events, or stay available through calls.`
    }
    ,
    {
      question: "How are volunteers matched with elders?",
      answer: `Matching is done based on personality, needs, interests, location, and comfort level ensuring meaningful and natural companionship.`
    },
    {
      question: "Will volunteers get support from the TuHiTu team? ",
      answer: `Yes. The TuHiTu Onelife Circle team provides full support, guidance, coordination.`
    },
    {
      question: "Is it safe for volunteers to visit elders?",
      answer: `Absolutely. All elders are registered, verified, and assessed. Volunteers are always supported by the TuHiTu team during visits, events, and interactions.`
    },
    {
      question: "Can college students or working professionals join as Companions? ",
      answer: `Yes. The program is designed to fit flexible schedules and welcomes students, professionals, homemakers, and anyone who wants to make a difference.`
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

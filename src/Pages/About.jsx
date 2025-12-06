import Header from "../components/Header";
import Footer from "../components/Footer";
import OfferingSection from '../components/OfferingSection.jsx';
import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const content = {
    title: "Tuhitu One Life Circle: A Community Rooted in Compassion ",
    image: "/Images/unnamed (9).png",
    paragraphs: ["Tuhitu One Life Circle is a community-driven initiative created to restore companionship, dignity, and emotional wellbeing in the lives of elders. We operate across Delhi, NCR, Gurugram, and Noida, with active expansion toward Panchkula, Mohali, and Chandigarh. "],
  };

  const content1 = {
    title: " Human connection is the deepest form of care",
    image: "/Images/unnamed (1).png",
    paragraphs: [
      "In a world where time moves quickly and conversations grow shorter, elders often find themselves living among people, yet feeling emotionally alone. Tuhitu One Life Circle exists to bridge this gap with genuine companionship, meaningful interactions, and a compassionate presence in their everyday life. ",
    ],
  };

  // const content2 = {
  //   title: "From the Founder’s Heart",
  //   image: "/Images/unnamed (9).png",
  //   imageCaption: "Our founder, Shantanu Naidu",
  //   paragraphs: [
  //     "Intergenerational friendships are special and meaningful. They bridge experiences between youth and the elderly.",
  //   ],
  // };

  return (
    <>
      <Header />

      <section className="founder-section fade-in">
        <div className="founder-grid">

          <div className="founder-textbox">
            <h1 className="founder-title">{content.title}</h1>

            {content.paragraphs.map((para, index) => (
              <p key={index} className="founder-paragraph">{para}</p>
            ))}
          </div>

          <div className="founder-imagebox">
            <img src={content.image} alt="founder" className="founder-side-image" />
          </div>

        </div>
      </section>

      <section className="imageLeft-section fade-up">
        <div className="imageLeft-wrapper">
          <img src={content1.image} alt="team" className="imageLeft-img" />

          <div className="imageLeft-content">
            <h2>{content1.title}</h2>
            {content1.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
      <OfferingSection />

      {/* <section className="imageLeft-section fade-up">
        <div className="imageLeft-wrapper">
          <img src={content1.image} alt="team" className="imageLeft-img" />

          <div className="imageLeft-content">
            <h2>{content1.title}</h2>
            {content1.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section> */}

      <section className="team-section fade-up">
  <div className="team-grid">
    <img
      src="/Images/unnamed (11).png"
      className="team-photo"
      alt="team"
    />

    <div className="team-content">
      <h2>HOW THE MOVEMENT WAS BORN</h2>
      <p>
        It began in the quiet corners of old-age homes, during long, unfiltered
        conversations with elders who had lived full, meaningful lives yet now
        carried a loneliness that words could barely describe. It emerged in the
        brief pauses between their stories where pain lived, where memories
        faded, where emotions remained unspoken.
      </p>
      <p>
        Over months of field visits, home calls, and research across cities,
        our team met seniors from all backgrounds: some living with family,
        some living alone, some in care facilities. But the truth remained the
        same everywhere loneliness is not about being alone; it is about not
        being seen, not being heard, not being valued.
      </p>
      <p>
        We saw elders who had everything except someone to talk to. We met
        individuals who waited hours just to share a fivem inute conversation.
        We listened to stories that were heavy, beautiful, forgotten, and
        healing stories that reminded us that aging is not the struggle;
        being emotionally abandoned is.
      </p>

      <p>
        This movement was born the day we understood that care is not a service
        it is a responsibility.
      </p>

      <ul>
        <li>A responsibility to restore dignity.</li>
        <li>A responsibility to bring back connection.</li>
        <li>
          A responsibility to make sure no elder spends their final decades
          feeling invisible.
        </li>
      </ul>

      <p>
        TuHiTu Onelife Circle is not just a wellness initiative it is a promise
        to see, hear, and value every life.
      </p>

      <button
        className="team-btn"
        onClick={() => navigate("/WhatWeOffer")}
      >
        Know More
      </button>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}

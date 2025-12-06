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
          <img src="/Images/unnamed (11).png" className="team-photo" alt="team" />

          <div className="team-content">
            <h2>HOW THE MOVEMENT WAS BORN</h2>
            <p>
              The idea of Tuhitu One Life Circle did not emerge in an office, on a whiteboard, or during a planning meeting. It emerged in the quiet corners of old-age homes, in the pauses between conversations with elders, and in the unspoken stories hidden behind their smiles. 

It began with listening. 
 And through listening, we discovered truth. 

During months of research, interactions, and field visits, our team met elders across different cities and living situations. We observed something universal — despite having homes, families, and basic comfort, many elders carried a silent emotional burden. 
            </p>

            <button className="team-btn"onClick={() => navigate("/WhatWeOffer")}>Know More</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

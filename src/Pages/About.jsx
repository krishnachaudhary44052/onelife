import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  const content = {
    title: "From the Founder’s Heart: Bringing Generations Together",
    image: "/Images/unnamed (9).png",
    paragraphs: [
      `TuHiTu Onelife –  Because Parents Deserve a Life as Beautiful as the One They Gave Us....`,
      `Distance should never come between you and your parents....`,
      ` In today’s world, we all chase dreams, build careers, and often move far from home. But while ...`,
      `you grow, a part of your heart stays back with them. And sometimes, that comes with a quiet ...`,
      `sense of guilt… “Are they okay? Are they lonely? Do they have someone to talk to?`,
    ],
  };

  const content1 = {
    title: "We Are the Goodfellows",
    image: "/Images/unnamed.png",
    paragraphs: [
      "We believe in providing more than just a service, but rather, a meaningful experience for our beloved Grandpals...",
    ],
  };

  const content2 = {
    title: "From the Founder’s Heart",
    image: "/Images/unnamed (9).png",
    imageCaption: "Our founder, Shantanu Naidu",
    paragraphs: [
      "Intergenerational friendships are special and meaningful. They bridge experiences between youth and the elderly.",
    ],
  };

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

      <section className="info-section fade-in">
        <h2 className="info-title">{content2.title}</h2>

        <div className="info-grid">
          <div className="info-left">
            <img src={content2.image} alt="founder" className="info-img" />
            <p className="info-caption">{content2.imageCaption}</p>
          </div>

          <div className="info-right">
            {content2.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section fade-up">
        <div className="team-grid">
          <img src="/Images/unnamed (11).png" className="team-photo" alt="team" />

          <div className="team-content">
            <h2>Looking To Be Part of Our Story?</h2>
            <p>
              We are a team of bright, kind, and innovative individuals making a difference in the lives of our Grandpals.
            </p>

            <button className="team-btn">Join The Team</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

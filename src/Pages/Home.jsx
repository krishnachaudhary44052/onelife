import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
import ModernSlider from "../components/ModernSlider";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const details = [
        {
            title: "Where Every Moment Feels Special",
            content:
                "Our tuhitu onelife circle is two elders paired with one dedicated Companion creates a balanced, personal, and humane experience. This structure ensures genuine bonding, long-term relationships, and emotional security for each elder",
            src: "/Images/PXL_20250407_074127834.jpg"
        },
        {
            title: "Discover Happiness in Every Shared Step",
            content: "We find joy in every stroll and would love to keep you company. Whether you need someone to walk you to a friend’s house or simply wish for a friendly presence in the park, we’re here for you.",
            src: "/Images/PXL_20250407_073826422.jpg"
        }
    ];

    return (
        <>
            <Header />
            <HeroSection />

            <div className="group">
                <div className="inner-group">
                    <p>
                        We are a community-driven companionship network designed to bring emotional connection, presence, and purpose back into the daily lives of elders. Our initiative connects seniors with trained youth volunteers, Companions who offer support not as caretakers, but as trusted friends who stand beside them.
                    </p>
                </div>
            </div>

            <LeftWindow
                title={details[0].title}
                content={details[0].content}
                image={details[0].src}
            />

            <RightWindow
                title={details[1].title}
                content={details[1].content}
                image={details[1].src}
            />

            <div className="video-wrapper">
                <h2 className="video-heading">A Little Look at the Joy we Share with our Grandbuddy!</h2>

                <div className="video-container">
                    <video
                        className="main-video"
                        src="/videos/vid.mp4"
                        controls
                    />
                </div>

                <div className="buttondiv">
                    <button className="video-button" onClick={() => navigate("/WhoGain")}>
                        View More Events
                    </button>
                </div>
            </div>

            <ModernSlider />

            <div className="video-wrapper">
                <h2 className="video-heading">Catch the Sparkle of Life with Our Grandbuddy</h2>

                <div className="video-container">
                    <video
                        className="main-video"
                        src="/videos/IMG_7342.MP4"
                        controls
                    />
                </div>
            </div>

            <div className="section-wrapper">
                <h1 className="section-title">Corporate Partnerships & CSR Collaboration</h1>

                <div className="section-text">
                    <p>
                        TuHiTu Onelife Circle welcomes CSR partners who wish to support meaningful community impact. Your contribution can help us provide companionship, wellness support, and care for elders who need it the most. 
We invite companies and foundations to join hands with us in building a compassionate, healthier society one elder, one family, one life at a time. 
                    </p>
                </div>

                <div className="section-button-wrap">
                    <button
                        className="section-button"
                        onClick={() => navigate("/WhoGain")}
                    >
                        View More Events
                    </button>
                </div>
            </div>

            <Gallery />

            <Footer />
        </>
    );
}

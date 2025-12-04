import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
import ModernSlider from "../components/ModernSlider";
import Footer from "../components/Footer"
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import "./Home.css";
import { FaQ } from "react-icons/fa6";

export default function Home() {

    const details = [
        {
            title: "Where Every Moment Feels Special",
            content:
                "Be it gentle conversations, storytelling, sharing life’s concerns, tea-time biscuits, playing ludo, or simply sitting together we are eager to spend time with you",
            src: "/Images/PXL_20250407_074127834.jpg"   
        }
        , {
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
                        We are a group of young hearts who simply love our elders. We step into their lives with warmth, listening ears, and gentle care hoping to become the kind of presence a grandchild brings… full of affection, laughter, and the feeling of being truly cherished
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
                    <button className="video-button">View More Events</button>
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
                <h1 className="section-title">It starts with a conversation…</h1>

                <div className="section-text">
                    <p>
                        If you are a senior citizen or know of an elderly looking for a companion,
                        click on the button below to get paired with a Goodfellow today!
                    </p>
                </div>

                <div className="section-button-wrap">
                    <button className="section-button">View More Events</button>
                </div>
            </div>
            <Gallery/>
            <FAQ/>

            <Footer />




        </>
    );
}

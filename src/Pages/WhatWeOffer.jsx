import Header from "../components/Header";
import SaladHeroSection from "../components/SaladAboutUs";
import Footer from "../components/Footer";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";

export default function WhatWeOffer() {
    
;


    return (
        <>
            <Header />
            <SaladHeroSection title="About Us" visual={true} />
            <div className="video-wrapper">
                <h2 className="video-heading">When you hear the same pain from many voices</h2>

                <div className="video-container">
                    <video
                        className="main-video"
                        src="/videos/whtv.mp4"
                        controls
                    />
                </div>
                <div className="buttondiv">
                    {/* <button className="video-button">View More Events</button> */}
                </div>
            </div>
            <div className="video-wrapper">
                <h2 className="video-heading">Different faces, different backgrounds</h2>

                <div className="video-container">
                    <video
                        className="main-video"
                        src="/videos/whtv1.mp4"
                        controls
                    />
                </div>
                <div className="buttondiv">
                    {/* <button className="video-button">View More Events</button> */}
                </div>
            </div>



            <Footer />
        </>
    )
}
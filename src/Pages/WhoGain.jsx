import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
import Gallery from "../components/Gallery";
export default function WhoGain() {

    const details = [
        {
            title: "Discover the joy of Quality time",
            content:
                "Be it nothing but chitchat, reminiscing stories, sharing troubles, or biscuits and tea, playing carrom together or simply watching TV, our Goodfellows are eager to lend a listening ear.",
            src: "/Images/3.png"
        }
        , {
            title: "HOW TUHITU ONELIFE CIRCLE WORKS ",
            content: "A transformative wellness experience should feel simple, structured, and effortless. Tuhitu Onelife Circle offers a clear path that guides every individual from their first consultation to sustained long-term wellbeing ",
            src: "/Images/unnamed (1).png"
        }
    ];

    return (
        <>
            <Header />
            {/* <LeftWindow
                title={details[0].title}
                content={details[0].content}
                image={details[0].src}
            /> */}

            <RightWindow
                title={details[1].title}
                content={details[1].content}
                image={details[1].src}

            />
            <Gallery/>
            <div className="video-wrapper">
                <h2 className="video-heading">EVERY LIFE Deserves A CIRCLE THAT HOLDS IT GENTLY</h2>

                <div className="video-container">
                    <video
                        className="main-video"
                        src="/videos/Wg.mp4"
                        controls
                    />
                </div>
                <div className="buttondiv">
                    {/* <button className="video-button">View More Events</button> */}
                </div>
            </div>
            <div className="video-wrapper">
                <h2 className="video-heading">AGING SHOULD NOT BE A JOURNEY WALKED ALONE</h2>

                <div className="video-container">
                    <video
                        className="main-video"
                        src="/videos/Wg1.mp4"
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
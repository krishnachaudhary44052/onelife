import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import { Import } from "lucide-react";
export default function HowSeniorsBenefits() {

    // const details = [
    //     {
    //         title: "Discover the joy of Quality time",
    //         content:
    //             "Be it nothing but chitchat, reminiscing stories, sharing troubles, or biscuits and tea, playing carrom together or simply watching TV, our Goodfellows are eager to lend a listening ear.",
    //         src: "/Images/3.png"
    //     }
    //     , {
    //         title: "Second section title",
    //         content: "Your Goodfellow will sit down for as long as you need to explain the basics of smartphones and gadgets, social media lingo and online deliveries. You name it, we teach it!",
    //         src: "/Images/3.png"
    //     }
    // ];

    return (
        <>
            <Header />
            <ComingSoon/>

            {/* <LeftWindow
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
                <h2 className="video-heading">How Seniors Benefits!</h2>

                <div className="video-container">
                    <video
                        className="main-video"
                        src="/videos/sample.mp4"
                        controls
                    />
                </div>
            </div> */}
            <Footer />
        </>
    )
}
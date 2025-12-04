import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftWindow from "../components/LeftWindow";
import RightWindow from "../components/RightWindow";
export default function WhoGain() {

    const details = [
        {
            title: "Discover the joy of Quality time",
            content:
                "Be it nothing but chitchat, reminiscing stories, sharing troubles, or biscuits and tea, playing carrom together or simply watching TV, our Goodfellows are eager to lend a listening ear.",
            src: "/Images/3.png"
        }
        , {
            title: "Second section title",
            content: "Your Goodfellow will sit down for as long as you need to explain the basics of smartphones and gadgets, social media lingo and online deliveries. You name it, we teach it!",
            src: "/Images/3.png"
        }
    ];

    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}
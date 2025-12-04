import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
    return (
        <>
            <Header />
            <div className="contactSection">

                <div className="contactColumn">
                    <h2 className="contactTitle">Hello there!</h2>

                    <p className="contactText">
                        If you’ve got a question about Goodfellows, in general, chances are you
                        can find them answered in our <i>FAQ section.</i>
                    </p>

                    <a href="/faqs" className="contactLink">
                        Go to FAQ section
                    </a>
                </div>

                <div className="contactColumn">
                    <h2 className="contactTitle">Please feel free to reach out</h2>

                    <p className="contactPhone">
                        <a href="tel:+918779524307">+91 87795 24307</a>
                    </p>

                    <p className="contactTiming">
                        (Please feel free to contact us between 10 AM and 6 PM)
                    </p>

                    <p className="contactEmail">
                        <a href="mailto:contact@thegoodfellows.in">
                            contact@thegoodfellows.in
                        </a>
                    </p>

                    <p className="contactEmail">
                        <a href="mailto:careers@thegoodfellows.in">
                            careers@thegoodfellows.in
                        </a>
                    </p>
                </div>

            </div>

            <Footer />
        </>

    );
}

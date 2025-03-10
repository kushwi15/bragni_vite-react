import React from "react";
import "../styles/Welcome.css";
import img2 from "../assets/img2.jpeg";
import img6 from "../assets/img6.jpg";

const Welcome = () => {
    return (
        <section className="welcome-section">
            <div className="welcome-container">
                {/* Left Side: Text Content */}
                <div className="text-content">
                    <h2>Welcome aboard!</h2>
                    <p>
                        Our company invites you on a fascinating sea voyage to uninhabited islands or unknown places 
                        of tourist zones. We love what we do with all our hearts and are ready to share it with you. 
                        Yachting is our life. Choose convenient dates, a yacht, and go on a trip.
                    </p>
                    <p>
                        There is a belief that yachting is expensive. But if you figure it out and do the math, 
                        sailing is no more expensive than a regular vacation in Europe.
                    </p>
                    <button className="book-now-btn">Book Now</button>
                </div>

                {/* Right Side: Image Gallery */}
                <div className="image-gallery">
                    <div className="large-img">
                        <img src={img2} alt="Scenic Ocean View" />
                    </div>
                    <div className="small-img">
                        <img src={img6} alt="Boat Sailing" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;

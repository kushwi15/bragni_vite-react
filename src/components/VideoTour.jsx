import React from "react";
import "../styles/VideoTour.css"; // Import your CSS file

const VideoTour = () => {
  return (
    <section className="video-tour">
      <div className="content">
        <h2>Video Tour</h2>
        <p>
          You and without us have heard a lot about Thailand and the charms of Asia,
          where everything is different, where the islands are covered with palm trees
          and lianas, markets are bursting with fruits and fish, the sand is snow-white,
          and from the yacht, you can see the seabed in clear water.
        </p>
      </div>

      <div className="video-container">
        <video id="video" controls autoPlay muted loop poster="assets/video-thumbnail.jpg">
          <source
            src="https://v.ftcdn.net/03/95/97/23/700_F_395972320_UNoSaI7XvqhnIvkBzk0fgFV0VQSBygiJ_ST.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoTour;

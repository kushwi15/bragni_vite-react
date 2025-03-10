import React, { useState, useEffect, useRef } from "react";
import "../styles/HeroSection.css";
import bg1 from "../assets/bg1.jpeg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

const images = [img1, img2, img3, img4];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const imageWidthRef = useRef(0);
  const autoSlideInterval = useRef(null);
  const visibleImages = 3;

  // Function to update image width dynamically
  useEffect(() => {
    const updateImageWidth = () => {
      if (sliderRef.current?.children[0]) {
        imageWidthRef.current = sliderRef.current.children[0].offsetWidth + 15;
      }
    };

    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);

    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoSlideInterval.current);
  }, [index]);

  // Slide to next image
  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex < images.length ? prevIndex + 1 : 0
    );
  };

  // Slide to previous image
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - visibleImages
    );
  };

  return (
    <header className="hero-section" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>
          Let's take <br /> <span className="highlight">a Yacht trip</span>
        </h1>
        <p>We love what we do with all our hearts and are ready to share it with you.</p>
        <p>Yachting is our life. Choose our convenient dates, a yacht, and go on a trip.</p>

        <div className="navigation-arrows">
          <button className="arrow left" onClick={handlePrev} aria-label="Previous Image">
            &larr;
          </button>
          <button className="arrow right" onClick={handleNext} aria-label="Next Image">
            &rarr;
          </button>
        </div>

        <div className="slider-wrapper">
          <div
            className="slider-container"
            ref={sliderRef}
            style={{ transform: `translateX(-${index * imageWidthRef.current}px)` }}
          >
            {[...images, ...images].map((img, idx) => (
              <img key={idx} src={img} className="gallery-img" alt={`Yacht ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

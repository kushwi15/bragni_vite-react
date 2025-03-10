import React, { useEffect, useState, useRef } from "react";
import "../styles/Stats.css"; // Import the styles
import img1 from "../assets/img1.jpeg"; // Adjust path based on your structure
import img5 from "../assets/img5.jpeg";

const statsData = [
  { target: 441, label: "Experiences" },
  { target: 21, label: "Destinations" },
  { target: 7, label: "Continents" },
  { target: 36, label: "Active Yachts" }
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const startCounting = () => {
      if (started.current) return;
      started.current = true;

      statsData.forEach((stat, index) => {
        let count = 0;
        const increment = stat.target / 100;

        const updateCounter = () => {
          if (count < stat.target) {
            count += increment;
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.ceil(count);
              return newCounts;
            });
            setTimeout(updateCounter, 20);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = stat.target;
              return newCounts;
            });
          }
        };

        updateCounter();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-container">
        {/* Left Image */}
        <div className="left-img">
          <img src={img1} alt="Ocean View" />
        </div>

        {/* Right Side Content */}
        <div className="right-content">
          {/* Stats */}
          <div className="stats">
            {statsData.map((stat, index) => (
              <div className="stat-item" key={index}>
                <h2 className="counter">{counts[index]}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right Image Below Stats */}
          <div className="right-img">
            <img src={img5} alt="Yacht" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

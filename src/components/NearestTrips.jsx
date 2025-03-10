import React, { useState, useEffect } from "react";
import "../styles/NearestTrips.css";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpg";

const tripsData = [
    { id: 1, img: img1, price: "$700", rating: "★★★★★", title: "Luxury catamaran in the Caribbean", duration: "2020 winter, 7 days" },
    { id: 2, img: img2, price: "$1,050", rating: "★★★★★", title: "New Years regatta in Thailand", duration: "2021 winter, 1 week" },
    { id: 3, img: img3, price: "$850", rating: "★★★★☆", title: "Luxury holidays in Turkey", duration: "2021 winter, 8 days" },
    { id: 4, img: img4, price: "$900", rating: "★★★★★", title: "Mediterranean Escape", duration: "2022 summer, 10 days" },
    { id: 5, img: img5, price: "$1,200", rating: "★★★★★", title: "Exotic Maldives Adventure", duration: "2022 spring, 1 week" },
    { id: 6, img: img6, price: "$950", rating: "★★★★☆", title: "Sailing Through Greece", duration: "2023 fall, 6 days" },
    { id: 7, img: img1, price: "$1,100", rating: "★★★★★", title: "Caribbean Sunset Cruise", duration: "2023 summer, 9 days" },
    { id: 8, img: img2, price: "$1,400", rating: "★★★★★", title: "Tropical Paradise in Bali", duration: "2023 spring, 1 week" },
    { id: 9, img: img3, price: "$1,000", rating: "★★★★☆", title: "Scenic Fjord Exploration", duration: "2024 winter, 5 days" },
];

const NearestTrips = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tripsPerPage, setTripsPerPage] = useState(3);
    const totalPages = Math.ceil(tripsData.length / tripsPerPage);

    useEffect(() => {
        const updateTripsPerPage = () => {
            if (window.innerWidth <= 768) {
                setTripsPerPage(1);
            } else if (window.innerWidth <= 1024) {
                setTripsPerPage(2);
            } else {
                setTripsPerPage(3);
            }
        };

        window.addEventListener("resize", updateTripsPerPage);
        updateTripsPerPage();
        return () => window.removeEventListener("resize", updateTripsPerPage);
    }, []);

    const nextSlide = () => {
        if (currentIndex + tripsPerPage < tripsData.length) {
            setCurrentIndex(currentIndex + tripsPerPage);
        }
    };

    const prevSlide = () => {
        if (currentIndex - tripsPerPage >= 0) {
            setCurrentIndex(currentIndex - tripsPerPage);
        }
    };

    return (
        <section className="nearest-trips">
            <h2>Our Nearest Trips</h2>
            <div className="trips-wrapper">
                <div className="trips-container" style={{ transform: `translateX(-${(currentIndex / tripsPerPage) * 100}%)` }}>
                    {tripsData.map((trip) => (
                        <div key={trip.id} className="trip-card">
                            <img src={trip.img} alt={trip.title} />
                            <div className="trip-info">
                                <span className="price">{trip.price}</span>
                                <div className="rating">{trip.rating}</div>
                                <h3>{trip.title}</h3>
                                <p>{trip.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="nav-buttons">
                <button className="prev-btn" onClick={prevSlide} disabled={currentIndex === 0}>←</button>
                <span className="page-number">{Math.floor(currentIndex / tripsPerPage) + 1} / {totalPages}</span>
                <button className="next-btn" onClick={nextSlide} disabled={currentIndex + tripsPerPage >= tripsData.length}>→</button>
            </div>
        </section>
    );
};

export default NearestTrips;
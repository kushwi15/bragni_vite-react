import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import Welcome from "../components/Welcome";
import NearestTrips from "../components/NearestTrips";
import VideoTour from "../components/VideoTour";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <Welcome />
      <NearestTrips />
      <VideoTour />
      <Footer />
    </>
  );
}

export default Home;

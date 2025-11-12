import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

// List of images to cycle
const images = [
  "/images/fortnite.jpg",
  "/images/valorant.jpg",
  "/images/pubg.jpg",
  "/images/apex.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-96 flex items-center justify-center bg-gray-900 text-white overflow-hidden"
      style={{ backgroundColor: "#9c91e1ff" }}
    >
      <img
        src={images[currentImage]}
        alt="Game"
        className="absolute w-full h-full object-cover opacity-30"
      />
      <h1 className="text-3xl md:text-5xl font-bold z-10 text-center">
        <Typewriter
          words={[
            "Play Fortnite 🕹️",
            "Play Valorant 🔫",
            "Play PUBG 🍀",
            "Play Apex Legends ⚔️",
          ]}
          loop={0} // infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
    </section>
  );
};

export default Hero;

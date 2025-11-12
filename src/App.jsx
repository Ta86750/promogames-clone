import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";

// Import your images
import fortniteImg from "./assets/fortnite.jpg";
import valorantImg from "./assets/valorant.jpg";
import pubgImg from "./assets/pubg.jpg";
import apexImg from "./assets/apex.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <GameCard name="Fortnite" image={fortniteImg} prize="1000 coins" />
          <GameCard name="Valorant" image={valorantImg} prize="500 coins" />
          <GameCard name="PUBG" image={pubgImg} prize="800 coins" />
          <GameCard name="Apex Legends" image={apexImg} prize="1200 coins" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

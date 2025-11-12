import React from "react";

const GameCard = ({ name, image, prize, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 border border-gray-100">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <p className="text-red-600 font-semibold mt-2">🏆 {prize}</p>
        <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;

import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} alt="PromoGames" className="h-10 w-10 mr-3" />
        <span className="text-xl font-bold">PromoGames</span>
      </div>

      {/* Links on the right */}
      <ul className="flex space-x-6">
        <li><a href="#featured" className="hover:text-red-500">Featured</a></li>
        <li><a href="#games" className="hover:text-red-500">Games</a></li>
        <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

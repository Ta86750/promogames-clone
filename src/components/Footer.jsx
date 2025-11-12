import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">PromoGames</h2>
          <p className="text-sm text-gray-400">
            Play fun games, win rewards, and enjoy exciting offers daily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#games" className="hover:text-red-500">Games</a></li>
            <li><a href="#offers" className="hover:text-red-500">Offers</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400">📧 support@promogames.in</p>
          <p className="text-sm text-gray-400">📞 +91 98765 43210</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-red-500 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-red-500 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-red-500 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} PromoGames. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

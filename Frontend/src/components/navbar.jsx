// src/components/Navbar.jsx
import { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-scroll";   // ✅ react-scroll import

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <FiBookOpen className="text-orange-500 text-2xl" />
          <span className="text-xl font-bold text-orange-500">BookHaven</span>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-1/3">
          <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2 bg-white/60">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search books..."
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-orange-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="books"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-orange-500 cursor-pointer"
          >
            Books
          </Link>
          <a href="#" className="text-gray-800 hover:text-orange-500">
            Cart
          </a>

          {/* Login Button */}
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Login
          </button>

          {/* Cart Icon */}
          <div className="relative">
            <FaShoppingCart className="text-2xl text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

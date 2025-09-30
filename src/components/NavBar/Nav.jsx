import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/galaxy.png";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  );

  const NavbarContent = () => (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="w-10 cursor-pointer">
        <img src={logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 font-bold text-lg">
        {/* Explore */}
        <div className="relative" onMouseEnter={() => setOpenDropdown("explore")} onMouseLeave={() => setOpenDropdown(null)}>
          <button className="flex items-center space-x-2">
            <span>Explore</span>
            {openDropdown === "explore" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
          <div className={`absolute top-full left-0 mt-2 w-52 border border-gray-200 backdrop-blur-2xl py-4 px-4 text-xl tracking-wider ${openDropdown === "explore" ? "block" : "hidden"}`}>
            <ul className="flex flex-col gap-2">
              <a href="https://www.nasa.gov/" className="hover:text-red-500">Home</a>
              <a href="https://www.nasa.gov/nasa-missions/" className="hover:text-red-500">Missions</a>
              <a href="https://www.nasa.gov/humans-in-space/" className="hover:text-red-500">Humans in Space</a>
            </ul>
          </div>
        </div>

        {/* News */}
        <div className="relative" onMouseEnter={() => setOpenDropdown("News")} onMouseLeave={() => setOpenDropdown(null)}>
          <button className="flex items-center space-x-2">
            <span>News & Event</span>
            {openDropdown === "News" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
          <div className={`absolute top-full right-0 mt-2 w-60 border border-gray-200 backdrop-blur-2xl py-4 px-3 text-xl ${openDropdown === "News" ? "block" : "hidden"}`}>
            <ul className="flex flex-col gap-2">
              <a href="https://www.nasa.gov/2025-news-releases/" className="hover:text-red-600">News Releases</a>
              <a href="https://www.nasa.gov/news/recently-published/" className="hover:text-red-600">Recently Published</a>
              <a href="https://plus.nasa.gov/series/" className="hover:text-red-600">Video Series on NASA+</a>
            </ul>
          </div>
        </div>

        {/* Media */}
        <div className="relative" onMouseEnter={() => setOpenDropdown("Media")} onMouseLeave={() => setOpenDropdown(null)}>
          <button className="flex items-center space-x-2">
            <span>MultiMedia</span>
            {openDropdown === "Media" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
          <div className={`absolute top-full right-0 mt-2 w-60 border border-gray-200 backdrop-blur-2xl py-4 px-3 text-xl ${openDropdown === "Media" ? "block" : "hidden"}`}>
            <ul className="flex flex-col gap-2">
              <a href="https://plus.nasa.gov/" className="hover:text-red-500">NASA+</a>
              <a href="https://www.nasa.gov/images/" className="hover:text-red-500">Images</a>
              <a href="https://www.nasa.gov/live" className="hover:text-red-500">NASA Live</a>
            </ul>
          </div>
        </div>

        {location.pathname === "/" && (
            <button
               className="border border-white px-4 py-1 rounded-lg hover:bg-red-800"
                    onClick={() => navigate("/login")}
  >
    Get Started
  </button>
)}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? "✖" : "☰"}
      </button>
    </div>
  );

  return (
    <div className=" relative w-screen z-50">
      {isHomePage ? (
        // Home page: fixed navbar always
        <div className="absolute top-0 left-0 right-5 w-max-screen bg-gradient-to-br backdrop-blur-sm text-white shadow-xl">
          <NavbarContent />
        </div>
      ) : (
        // Other pages: animated hover navbar
        <AnimatePresence>
          {showNavbar && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-screen bg-gradient-to-br backdrop-blur-sm text-white shadow-xl"
              onMouseEnter={() => setShowNavbar(true)}
              onMouseLeave={() => setShowNavbar(false)}
            >
              <NavbarContent />
            </motion.div>
          )}

          {!showNavbar && (
            <div className="fixed top-4 left-6 w-12 cursor-pointer" onMouseEnter={() => setShowNavbar(true)}>
              <motion.img src={logo} alt="logo" whileHover={{ scale: 1.1, rotate: 10 }} transition={{ type: "spring", stiffness: 200 }} />
            </div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Nav;

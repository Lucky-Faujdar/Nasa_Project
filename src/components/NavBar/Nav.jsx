import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/galaxy.png";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const ChevronDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  );

  return (
    <div className="absolute top-0 w-screen z-50 bg-gradient-to-br backdrop-blur-sm text-white shadow-xl">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="w-10">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-bold text-lg">
          {/* Explore */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("explore")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center space-x-2">
              <span>Explore</span>
              {openDropdown === "explore" ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-52 border border-gray-200 backdrop-blur-2xl py-4 px-4 text-xl tracking-wider ${
                openDropdown === "explore" ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-2">
                <a href="https://www.nasa.gov/" className="hover:text-red-500">Home</a>
                <a href="https://www.nasa.gov/nasa-missions/" className="hover:text-red-500">Missions</a>
                <a href="https://www.nasa.gov/humans-in-space/" className="hover:text-red-500">Humans in Space</a>
              </ul>
            </div>
          </div>

          {/* News */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("News")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center space-x-2">
              <span>News & Event</span>
              {openDropdown === "News" ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            <div
              className={`absolute top-full right-0 mt-2 w-60 border border-gray-200 backdrop-blur-2xl py-4 px-3 text-xl ${
                openDropdown === "News" ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-2">
                <a href="https://www.nasa.gov/2025-news-releases/" className="hover:text-red-600">News Releases</a>
                <a href="https://www.nasa.gov/news/recently-published/" className="hover:text-red-600">Recently Published</a>
                <a href="https://plus.nasa.gov/series/" className="hover:text-red-600">Video Series on NASA+</a>
              </ul>
            </div>
          </div>

          {/* Media */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("Media")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center space-x-2">
              <span>MultiMedia</span>
              {openDropdown === "Media" ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            <div
              className={`absolute top-full right-0 mt-2 w-60 border border-gray-200 backdrop-blur-2xl py-4 px-3 text-xl ${
                openDropdown === "Media" ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-2">
                <a href="https://plus.nasa.gov/" className="hover:text-red-500">NASA+</a>
                <a href="https://www.nasa.gov/images/" className="hover:text-red-500">Images</a>
                <a href="https://www.nasa.gov/live" className="hover:text-red-500">NASA Live</a>
              </ul>
            </div>
          </div>

          <button
            className="border border-white px-4 py-1 rounded-lg hover:bg-red-800"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 border-t border-gray-600">
          {/* Mobile Explore */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "explore" ? null : "explore")
              }
              className="flex items-center justify-between w-full"
            >
              <span>Explore</span>
              {openDropdown === "explore" ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            {openDropdown === "explore" && (
              <ul className="flex flex-col gap-2 mt-2 pl-4">
                <a href="https://www.nasa.gov/">Home</a>
                <a href="https://www.nasa.gov/nasa-missions/">Missions</a>
                <a href="https://www.nasa.gov/humans-in-space/">Humans in Space</a>
              </ul>
            )}
          </div>

          {/* Mobile News */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "News" ? null : "News")
              }
              className="flex items-center justify-between w-full"
            >
              <span>News & Event</span>
              {openDropdown === "News" ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            {openDropdown === "News" && (
              <ul className="flex flex-col gap-2 mt-2 pl-4">
                <a href="https://www.nasa.gov/2025-news-releases/">News Releases</a>
                <a href="https://www.nasa.gov/news/recently-published/">Recently Published</a>
                <a href="https://plus.nasa.gov/series/">Video Series on NASA+</a>
              </ul>
            )}
          </div>

          {/* Mobile Media */}
          <div>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "Media" ? null : "Media")
              }
              className="flex items-center justify-between w-full"
            >
              <span>MultiMedia</span>
              {openDropdown === "Media" ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            {openDropdown === "Media" && (
              <ul className="flex flex-col gap-2 mt-2 pl-4">
                <a href="https://plus.nasa.gov/">NASA+</a>
                <a href="https://www.nasa.gov/images/">Images</a>
                <a href="https://www.nasa.gov/live">NASA Live</a>
              </ul>
            )}
          </div>

          <button
            className="border border-white px-4 py-1 rounded-lg hover:bg-red-800 w-fit"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;

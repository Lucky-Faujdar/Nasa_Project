import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../public/galaxy.png";
import svg from "../../assets/search.svg";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const ChevronDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div>
      <div className="absolute top-0 w-380 z-50 h-17 text-white flex items-center px-8 py-4 justify-between shadow-xl bg-gradient-to-br backdrop-blur-sm border-b-zinc-700 border-b-1 font-[font1] text-lg tracking-wide">
        <div className="flex items-center gap-30 mr-20">
          {/* Explore */}
          <button
            onClick={() => {
              handleDropdownToggle("explore"), setToggle1(!toggle1);
            }}
            className="flex items-center space-x-2 font-bold text-lg"
          >
            <span>Explore</span>
            {openDropdown === "explore" ? (
              <ChevronUpIcon />
            ) : (
              <ChevronDownIcon />
            )}
          </button>

          <div className="flex items-center">
            <svg
              className="w-5 h-5 absolute left-39 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns={svg}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              className="border-2 border-gray-500 rounded-lg pl-9 pr-4 py-1 scale-90 active:border-2 font-[font2] ml-[-100px]"
              type="text"
            />
          </div>
        </div>

        {/* LOGO */}
        <div id="logo" className="w-10  text-white">
          <img src={logo} alt="" />
        </div>

        <div className="flex gap-20">
          {/* News & Event */}
          <button
            onClick={() => {
              handleDropdownToggle("News"), setToggle2(!toggle2);
            }}
            className="flex items-center space-x-2 font-bold text-lg"
          >
            <span>News & Event</span>
            {openDropdown === "News" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>

          {/* MultiMedia */}
          <button
            onClick={() => {
              handleDropdownToggle("Media"), setToggle3(!toggle3);
            }}
            className="flex items-center space-x-2 font-bold text-lg"
          >
            <span>MultiMedia</span>
            {openDropdown === "Media" ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>

          {/* Login */}
          <button
            className="border-1 border-white px-4 py-1 rounded-lg hover:bg-red-800"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>

      {/* Explore */}
      <div
        className={`absolute top-17 left-8 w-50 z-100 font-[font2] border border-gray-200 backdrop-blur-2xl text-white py-7 px-4 font-light text-xl tracking-wider ${
          toggle1 ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2">
          <a
            href="https://www.nasa.gov/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Home</span>
          </a>
          <a
            href="https://www.nasa.gov/nasa-missions/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Missions</span>
          </a>
          <a
            href="https://www.nasa.gov/humans-in-space/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Humans in Space</span>
          </a>
          <a
            href="https://science.nasa.gov/earth/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Earth</span>
          </a>
          <a
            href="https://science.nasa.gov/solar-system/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>The Solar System</span>
          </a>
          <a
            href="https://science.nasa.gov/universe/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>The Universe</span>
          </a>
          <a
            href="https://science.nasa.gov/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Science</span>
          </a>
          <a
            href="https://www.nasa.gov/aeronautics/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Aeronautics</span>
          </a>
          <a
            href="https://www.nasa.gov/technology/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Technology</span>
          </a>
          <a
            href="https://www.nasa.gov/learning-resources/"
            className="hover:text-red-500 hover:scale-105 transition-transform duration-200"
          >
            <span>Learning Resources</span>
          </a>
        </ul>
      </div>

      {/* News and Event */}
      <div
        className={`absolute top-17 left-[900px] w-60 z-100 border border-gray-200 backdrop-blur-2xl py-7 px-3 font-light text-xl text-white tracking-wider ${
          toggle2 ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="https://www.nasa.gov/2025-news-releases/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>News Releases</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/news/recently-published/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Recently Published</span>
            </a>
          </li>
          <li>
            <a
              href="https://plus.nasa.gov/series/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Video Series on NASA+</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/podcasts-and-audio/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Podcasts &amp; Audio</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/nasa-blogs/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Blogs</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/newsletters/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Newsletters</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/social-media/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Social Media</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/news/media-contacts/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Media Resources</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/events"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Events</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/event-type/launch-schedule/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Upcoming Launches &amp; Landings</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/nasa-virtual-guest-program/"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <span>Virtual Guest Program</span>
            </a>
          </li>
        </ul>
      </div>

      {/* MUtiMedia */}
      <div
        className={`absolute top-17 left-[1220px] w-60 z-100 border border-gray-200 backdrop-blur-2xl py-7 px-3 font-light text-xl text-white tracking-wider ${
          toggle3 ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="https://plus.nasa.gov/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>NASA+</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/images/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>Images</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/live"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>NASA Live</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/apps/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>NASA Apps</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/podcasts/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>Podcasts</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/image-of-the-day/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>Image of the Day</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/ebooks/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>e-Books</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/interactives/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>Interactives</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/learning-resources/search/?terms=8058%2C8059%2C8061%2C8062%2C8068"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>STEM Multimedia</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.nasa.gov/nasa-brand-center/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              <span>NASA Brand &amp; Usage Guidelines</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

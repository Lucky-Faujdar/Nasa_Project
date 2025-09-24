import React from "react";
import { Link } from "react-router-dom";
import {
  FiUpload,
  FiImage,
  FiBarChart2,
  FiHelpCircle,
  FiZap,
} from "react-icons/fi";

// Sidebar component
const Sidebar = ({ user, historyItems = [], onSelectHistory }) => {
  return (
    <aside className="w-70 text-gray-200 p-6 flex flex-col h-150">
      {/* Profile Section */}
      <Link to="/profile" className="flex items-center space-x-4 mb-8 group">
        <img
          src={
            user?.profilePic ||
            "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60"
          }
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-cyan-400 group-hover:border-cyan-300 transition-all object-cover"
        />
        <div>
          <h2 className="font-[font2] font-bold text-lg">
            {user?.name || "USER..."}
          </h2>
          <p className="text-sm font-[font1] bg-cyan-500 text-gray-900 font-semibold px-2 py-0.5 rounded-full inline-block">
            {user?.status || "Active"}
          </p>
        </div>
      </Link>

      {/* Main Container */}
      <div className="flex-grow flex flex-col overflow-hidden rounded-lg border-2 border-gray-700">
        {/* History Section */}
        <div className="p-4 flex-1 overflow-y-auto border-b border-gray-700">
          <h3 className="font-semibold font-[font1] tracking-wide mb-3">
            History
          </h3>
          <ul className="font-[font2] space-y-2 text-sm text-gray-400">
            {historyItems.length === 0 ? (
              <p className="text-gray-500 text-sm">No history yet</p>
            ) : (
              historyItems.map((item, index) => (
                <li
                  key={index}
                  className="truncate hover:text-white cursor-pointer"
                  onClick={() => onSelectHistory && onSelectHistory(item)}
                  title={item}
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Features Section */}
        <div className="p-4 font-[font1] space-y-3">
          <Link
            to="/upload"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiUpload className="mr-3" /> Upload Papers
          </Link>
          <Link
            to="/image-generator"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiImage className="mr-3" /> Image Generator
          </Link>
          <Link
            to="/graph-generator"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiBarChart2 className="mr-3" /> Graph Generator
          </Link>
          <Link
            to="/quiz"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiHelpCircle className="mr-3" /> Quiz
          </Link>
          <Link
            to="/gamified-learning"
            className="flex items-center w-full p-2 rounded-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
          >
            <FiZap className="mr-3" /> Gamified Learning
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

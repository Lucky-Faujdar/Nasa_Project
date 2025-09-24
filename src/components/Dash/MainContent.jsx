import React from "react";
import SearchBar from "./SearchBar";

const MainContent = ({ addToHistory }) => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-10">
      {/* Title */}
      <h1 className="text-5xl font-bold font-[font1] tracking-wide text-gray-400 mb-8">
        Knowledge Explorer
      </h1>

      {/* ✅ Pass addToHistory so SearchBar can update Sidebar history */}
      <SearchBar addToHistory={addToHistory} />

      {/* Other dashboard content would go here */}
    </main>
  );
};

export default MainContent;

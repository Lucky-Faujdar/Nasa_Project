import { useState } from "react";
import { History, PlusCircle } from "lucide-react";
import image from "../../assets/heaven.jpg";
import Sidebar from "../../components/Dash/Sidebar";

export default function GraphGenerator({user}) {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="relative w-screen h-screen flex items-center">
      <div className="bg-transparent absolute left-0 z-50">
        <Sidebar user={user} />
      </div>
      <div className="relative w-screen h-screen">
        {/* Background */}
        <div className="w-full h-full absolute bottom-22 z-0 object-cover">
          <img className="w-full" src={image} alt="" />
        </div>

        <div className="flex items-center relative justify-center min-h-screen ">
          <div className="w-full max-w-lg backdrop-blur-sm rounded-2xl shadow-lg p-6 border-2 border-zinc-500">
            <h1 className="text-2xl font-bold text-white mb-6 text-center">
              Graph Generator
            </h1>

            {/* Option Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveTab("history")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
                  activeTab === "history"
                    ? " text-white bg-blue-900"
                    : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                }`}
              >
                <History size={18} />
                Select from History
              </button>

              <button
                onClick={() => setActiveTab("new")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
                  activeTab === "new"
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
                }`}
              >
                <PlusCircle size={18} />
                Create New Graph
              </button>
            </div>

            {/* Content Area */}
            <div className="p-4 rounded-xlbg-zink-900 border-zinc-700 border-2 bg-gradient-to-br from-blue-700 via-blue to-blue-900 bg-opacity-50 shadow-xl backdrop-filter backdrop-blur-xl rounded-2xl">
              {activeTab === "history" ? (
                <div className="text-center text-white">
                  <p>No graphs in history yet.</p>
                  <p className="text-sm mt-1">
                    Your generated graphs will appear here.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Enter data or formula..."
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
                  />
                  <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
                    Generate Graph
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-end border border-border rounded-t-lg overflow-hidden relative pl-6 bg-white">
      {tabs.map((tab, idx) => {
        const isActive = idx === activeTab;

        return (
          <div
            key={tab}
            className="relative flex-shrink-0 transition-all duration-300 ease-out"
          >
            {/* LEFT CURVE - always rendered, opacity transition only */}
            <div
              className={`absolute bottom-0 -left-8 w-8 h-8 pointer-events-none transition-opacity duration-300 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  borderBottomRightRadius: "20px",
                  boxShadow: "6px 6px 0 0 #0f172a",
                }}
              />
              <div
                className="absolute inset-0 z-20"
                style={{
                  borderBottomRightRadius: "28px",
                  boxShadow: "6px 6px 0 0 #0f172a",
                }}
              />
            </div>

            {/* RIGHT CURVE - always rendered, opacity transition only */}
            <div
              className={`absolute bottom-0 -right-8 w-8 h-8 pointer-events-none transition-opacity duration-300 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  borderBottomLeftRadius: "20px",
                  boxShadow: "-6px 6px 0 0 #0f172a",
                }}
              />
              <div
                className="absolute inset-0 z-20"
                style={{
                  borderBottomLeftRadius: "28px",
                  boxShadow: "-6px 6px 0 0 #0f172a",
                }}
              />
            </div>

            {/* TAB BUTTON */}
            <div className="w-full overflow-x-auto">
              <div className="flex flex-nowrap gap-2 min-w-max">
                <button
                  onClick={() => onTabChange(idx)}
                  className={`
        flex-shrink-0
        px-20 py-4 text-sm font-medium
        transition-all duration-300 ease-out
        rounded-t-2xl
        ${
          isActive
            ? "bg-[#0f172a] text-white shadow-[0_-4px_8px_rgba(0,0,0,0.15)] z-10"
            : "bg-white text-black hover:bg-gray-200 z-0"
        }
      `}
                >
                  {tab}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex-1" />

      {/* Add Button */}
      <button className="flex bg-gradient-to-r from-red-900 to-black text-white px-10 py-1.5 rounded-full hover:opacity-90 w-32 transition mr-2 mb-1.5">
        Add T
      </button>
    </div>
  );
};

export default TabBar;

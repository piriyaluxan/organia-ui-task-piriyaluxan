import React from "react";

const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-end border border-border rounded-t-lg relative bg-white overflow-hidden">
      {/* Scrollable Tabs Container */}
      <div className="flex items-end overflow-x-auto scrollbar-hide flex-nowrap lg:flex-wrap pl-2 sm:pl-4 lg:pl-6 w-full">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeTab;

          return (
            <div
              key={tab}
              className="relative flex-shrink-0 transition-all duration-300 ease-out"
            >
              {/* LEFT CURVE */}
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

              {/* RIGHT CURVE */}
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
              <div className="w-full">
                <div className="flex flex-wrap">
                  <button
                    onClick={() => onTabChange(idx)}
                    className={`
                      flex-shrink-0
                      px-6 sm:px-10 lg:px-20
                      py-2 sm:py-3 lg:py-4
                      text-xs sm:text-sm font-medium
                      transition-all duration-300 ease-out
                      rounded-t-2xl
                      whitespace-nowrap
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
      </div>

      {/* Add Button - Always Visible */}
      <div className="flex-shrink-0 pr-2 sm:pr-4 lg:pr-6 mb-1.5">
        <button
          className="flex items-center justify-center
          bg-gradient-to-r from-red-900 to-black
          text-white
          px-4 sm:px-6 lg:px-10
          py-1 sm:py-1.5
          text-xs sm:text-sm
          rounded-full
          hover:opacity-90
          transition
          w-20 sm:w-24 lg:w-32
        "
        >
          Add T
        </button>
      </div>
    </div>
  );
};

export default TabBar;

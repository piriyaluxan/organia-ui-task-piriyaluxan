import React from "react";

const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-end border border-border rounded-t-lg relative overflow-hidden pr-4">
      {/* Scrollable Tabs Container */}
      {/* Tabs */}
      <div className="flex items-end  lg:flex-wrap pl-2 sm:pl-4 lg:pl-6 w-full">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeTab;
          const isNotActive = idx !== activeTab;

          return (
            <div
              key={tab}
              className={`relative flex-shrink-0 transition-all duration-300 ease-out ${
                isActive ? "mx-4" : "mx-0"
              }`}
            >
              {/* LEFT CURVE - ACTIVE */}
              <div
                className={`absolute bottom-0 -left-8 w-8 h-8 pointer-events-none transition-opacity duration-300 ease-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 z-40"
                  style={{
                    borderBottomRightRadius: "20px",
                    boxShadow: "6px 6px 0 0 #0f172a",
                  }}
                />
                <div
                  className="absolute inset-0 z-40"
                  style={{
                    borderBottomRightRadius: "28px",
                    boxShadow: "6px 6px 0 0 #0f172a",
                  }}
                />
              </div>

              {/* LEFT CURVE - NOT ACTIVE */}
              <div
                className={`absolute bottom-0 -left-8 w-8 h-8 pointer-events-none transition-opacity duration-300 ease-out ${
                  isNotActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    borderBottomRightRadius: "28px",
                    boxShadow: "6px 6px 0 0 #ffffff",
                  }}
                />
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    borderBottomRightRadius: "20px",
                    boxShadow: "6px 6px 0 0 #ffffff",
                  }}
                />
              </div>

              {/* RIGHT CURVE - ACTIVE */}
              <div
                className={`absolute bottom-0 -right-8 w-8 h-8 pointer-events-none transition-opacity duration-100 ease-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 z-20"
                  style={{
                    borderBottomLeftRadius: "20px",
                    boxShadow: "-6px 6px 0 0 #0f172a",
                  }}
                />
                <div
                  className="absolute inset-0 z-40"
                  style={{
                    borderBottomLeftRadius: "28px",
                    boxShadow: "-6px 6px 0 0 #0f172a",
                  }}
                />
              </div>

              {/* RIGHT CURVE - NOT ACTIVE */}
              <div
                className={`absolute bottom-0 -right-8 w-8 h-8 pointer-events-none transition-opacity duration-300 ease-out ${
                  isNotActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    borderBottomLeftRadius: "28px",
                    boxShadow: "-6px 6px 0 0 #ffffff",
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
                        whitespace-nowrap
                        ${
                          isActive
                            ? "bg-[#0f172a] rounded-t-2xl text-white shadow-[0_-4px_8px_rgba(0,0,0,0.15)] z-10"
                            : "bg-white text-black z-0 " +
                              (idx === activeTab + 1 ? "rounded-tl-2xl " : "") +
                              (idx === activeTab - 1 ? "rounded-tr-2xl " : "") +
                              (idx === 0 ? "rounded-tl-2xl " : "")
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
        {/* RIGHT CURVE + Add Button */}
        <div className="relative flex-1 flex items-center justify-end">
          {/* RIGHT CURVE - always visible */}
          <div className="absolute bottom-0 -right-8 w-8 h-8 pointer-events-none">
            <div
              className="absolute inset-0 z-0"
              style={{
                borderBottomLeftRadius: "28px",
                boxShadow: "-6px 6px 0 0 #ffffff",
              }}
            />
            <div
              className="absolute inset-0 z-10"
              style={{
                borderBottomLeftRadius: "20px",
                boxShadow: "-6px 6px 0 0 #ffffff",
              }}
            />
          </div>

          {/* Button Container */}
          <div className="flex-1 bg-white w-full py-2 pr-2 md:pr-4 lg:pr-6 items-center justify-end flex rounded-tr-2xl">
            <button
              className="flex items-center justify-end
      bg-gradient-to-r from-red-900 to-black
      text-white
      px-4 sm:px-6 lg:px-10
      py-1 sm:py-1.5 md:py-2
      text-xs sm:text-sm
      rounded-full
      hover:opacity-90
      transition
      w-20 sm:w-24 lg:w-32"
            >
              Add T
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBar;

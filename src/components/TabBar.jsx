import React from "react";

const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-end  border border-border rounded-t-lg overflow-hidden relative pl-6">
      {tabs.map((tab, idx) => {
        const isActive = idx === activeTab;
        return (
          <div key={tab} className="relative flex-shrink-0 ">
            {isActive && (
              <>
                {/* Left inverse curve */}
                <div
                  className="absolute bottom-0 -left-8 w-8 h-8  z-10"
                  style={{
                    borderBottomRightRadius: "20px",
                    boxShadow: "6px 6px 0 0 #0f172a", // slate-900
                  }}
                />

                {/* Right inverse curve */}
                <div
                  className="absolute bottom-0 -right-8 w-8 h-8 z-10"
                  style={{
                    borderBottomLeftRadius: "20px",
                    boxShadow: "-6px 6px 0 0 #0f172a", // slate-900 color
                  }}
                />
              </>
            )}
            <button
              onClick={() => onTabChange(idx)}
              className={`relative px-10 py-3 text-sm font-medium transition-all  ${
                isActive
                  ? "bg-[#0f172a] text-white rounded-t-2xl z-10"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          </div>
        );
      })}
      <div className="flex-1" />
      {/* Add Button */}
      <button className="bg-gradient-to-r from-red-900 to-black text-white px-4 py-1 rounded-full hover:opacity-90 w-32 transition">
        Add T
      </button>
    </div>
  );
};

export default TabBar;

import React from "react";

const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-end bg-card border border-border rounded-t-lg overflow-hidden relative">
      {tabs.map((tab, idx) => {
        const isActive = idx === activeTab;
        return (
          <div key={tab} className="relative flex-shrink-0">
            {isActive && (
              <>
                {/* Left inverse curve */}
                <div
                  className="absolute bottom-0 -left-4 w-4 h-4 bg-card"
                  style={{
                    borderBottomRightRadius: "16px",
                    boxShadow: "6px 6px 0 0 hsl(var(--navy))",
                    zIndex: 1,
                  }}
                />
                {/* Right inverse curve */}
                <div
                  className="absolute bottom-0 -right-4 w-4 h-4 bg-card"
                  style={{
                    borderBottomLeftRadius: "16px",
                    boxShadow: "-6px 6px 0 0 hsl(var(--navy))",
                    zIndex: 1,
                  }}
                />
              </>
            )}
            <button
              onClick={() => onTabChange(idx)}
              className={`relative px-10 py-3 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-900 text-white rounded-t-2xl z-10"
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

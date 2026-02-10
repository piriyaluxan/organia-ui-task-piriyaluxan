import React from "react";

export default function Tabs({ tabs = [] }) {
  return (
    <div className="flex space-x-2">
      {tabs.map((t) => (
        <button key={t} className="px-3 py-1 rounded bg-white/5 text-white">
          {t}
        </button>
      ))}
    </div>
  );
}

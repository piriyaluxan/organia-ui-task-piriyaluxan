import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-800 text-white min-h-screen">
      <div className="text-xl font-semibold">Logo</div>
      <nav className="mt-6 space-y-2">
        <a className="block px-3 py-2 rounded hover:bg-gray-700">Dashboard</a>
        <a className="block px-3 py-2 rounded hover:bg-gray-700">Settings</a>
      </nav>
    </aside>
  );
}

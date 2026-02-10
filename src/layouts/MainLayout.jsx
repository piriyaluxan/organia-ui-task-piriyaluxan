import React from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function MainLayout({children}){
  return (
    <div className="flex min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 bg-[#121212]">
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

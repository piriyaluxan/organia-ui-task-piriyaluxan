import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../layouts/MainContent";

const MainDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default MainDashboard;

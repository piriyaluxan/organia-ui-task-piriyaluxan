import React from "react";
import Tab from "../components/Tab";
import DetailsForm from "../components/DetailsForm";
import Header from "../components/Header";
import StepsSidebar from "../components/StepsSidebar";

const MainContent = () => {
  return (
    <div className="flex-1">
      <Header />

      <div className="flex space-x-4 mb-4">
        <Tab title="T01" />
        <Tab title="T02" />
        <Tab title="T03" />
        <Tab title="T04" />
        <Tab title="T05" />
        <Tab title="T06" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StepsSidebar />
        <DetailsForm title="Details 1" />
        <DetailsForm title="Details 2" />
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add T
      </button>
    </div>
  );
};

export default MainContent;

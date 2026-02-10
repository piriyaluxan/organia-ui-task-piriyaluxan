import React from "react";

const Tab = ({ title }) => {
  return (
    <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-300">
      {title}
    </div>
  );
};

export default Tab;

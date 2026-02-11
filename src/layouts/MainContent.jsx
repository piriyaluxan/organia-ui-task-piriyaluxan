import React from "react";
import Tab from "../components/Tab";
import DetailsForm from "../components/DetailsForm";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import StepsSidebar from "../components/StepsSidebar";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const LiveIndicator = () => (
  <div className="flex items-center justify-center">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
    </span>
  </div>
);

const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-400">
      <div className="flex-col gap-4">
        <Header />

        <div className="flex justify-between items-center pl-4 border-b border-gray-300 bg-white">
          <div className="flex items-center gap-2 p-2">
            <div className="font-light">Main</div>
            <RiArrowRightSLine className="mt-0.5 " />
            <div className="font-semibold">Sub</div>
          </div>
        </div>

        <div className="pl-4 flex justify-between items-center border-b border-gray-300 bg-white">
          <div className="flex items-center gap-2 p-2">
            <div className="flex items-center justify-between gap-5 bg-black text-white px-4 py-1 rounded-full w-48">
              <div className="flex items-center">
                <LiveIndicator />
                <span className="text-white font-bold ml-4 mb-0.5">S - 01</span>
              </div>

              <BsCurrencyDollar className="bg-red-600 p-0.5 text-white rounded-full" />
            </div>
            <MdKeyboardDoubleArrowRight size={32} className="mt-0.5" />
            <div className="flex items-center justify-between bg-gray-200 text-white px-4 py-1 rounded-full w-48">
              <div className="flex items-center">
                <CiLocationOn
                  className="text-yellow-600 font-bold "
                  size={20}
                />
                <span className="text-black font-bold ml-4">S - 02</span>
              </div>
              <BsCurrencyDollar className="bg-red-600 p-0.5 text-white rounded-full" />
            </div>
          </div>
        </div>

        <div className="pl-4 flex justify-between items-center border-b border-gray-300 bg-white">
          <div className="flex items-center gap-2 p-2">
            <RiArrowRightSLine size={20} className="mt-0.5 " />
            <div className="font-semibold">Main Details</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Tab title="T01" />
            <Tab title="T02" />
            <Tab title="T03" />
            <Tab title="T04" />
            <Tab title="T05" />
            <Tab title="T06" />
          </div>
          <button className=" bg-gradient-to-r from-red-900 to-black text-white px-4 py-1 rounded-full hover:bg-red-700 w-32">
            Add T
          </button>
        </div>

        <div className="flex bg-white ">
          <StepsSidebar />
          <div className="grid grid-cols-1 gap-4 p-2">
            <div className="grid grid-cols-2 gap-2">
              <DetailsCard title="Details 1" />
              <DetailsCard title="Details 2" />
            </div>
            <DetailsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

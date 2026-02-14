import React from "react";
import { useState, useRef } from "react";

import Tab from "../components/TabBar";
import DetailsForm from "../components/DetailsForm";
import DetailsCard from "../components/DetailsCard";
import Header from "../components/Header";
import StepsSidebar from "../components/StepsSidebar";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import TabBar from "../components/TabBar";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";

const LiveIndicator = () => (
  <div className="flex items-center justify-center">
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
    </span>
  </div>
);

const tabs = ["T 01", "T 02", "T 03", "T 04", "T 05", "T 06"];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const detailsCard1Ref = useRef();
  const detailsCard2Ref = useRef();

  const handleAdd = () => {
    // Submit the first DetailsCard form
    if (detailsCard1Ref.current) {
      detailsCard1Ref.current.submit();
    }
  };

  return (
    <div className="flex-1 bg-gray-200 p-0.5">
      <div className="flex-col gap-4">
        <Header />

        <div className="flex justify-between items-center  sm:pl-4 border-b border-gray-300 bg-white">
          <div className="flex items-center gap-2 p-2">
            <div className="font-light">Main</div>
            <RiArrowRightSLine className="mt-0.5 " />
            <div className="font-semibold">Sub</div>
          </div>
        </div>

        <div className="sm:pl-4 flex justify-between items-center border-b border-gray-300 bg-white">
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
          <button className="mr-6 p-1  hover:bg-gray-100 rounded transition">
            <HiMiniArrowsRightLeft
              className="text-black font-black"
              size={32}
            />
          </button>
        </div>

        <div className="sm:pl-4 flex justify-between items-center border-b border-gray-300 bg-white">
          <div className="flex items-center gap-2 p-2">
            <RiArrowRightSLine size={20} className="mt-0.5 " />
            <div className="font-semibold">Main Details</div>
          </div>
        </div>
        <div className="ml-2">
          <div className="px-6 pt-0.5">
            <TabBar
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onAdd={handleAdd}
            />
          </div>

          <div className="flex bg-gray-50 border-4 rounded-2xl border-black ">
            <StepsSidebar />
            <div className="grid grid-cols-1 gap-4 p-2 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <DetailsCard ref={detailsCard1Ref} title="Details 1" />
                <DetailsCard ref={detailsCard2Ref} title="Details 2" />
              </div>
              <DetailsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

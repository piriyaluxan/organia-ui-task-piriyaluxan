import React from "react";
import { BiTransfer } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { FaTruck } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Sidebar = () => {
  const menuItemClass =
    "flex flex-col items-center justify-center gap-0.5 cursor-pointer font-semibold";

  const iconWrapperClass =
    "p-2 rounded-md transition-all hover:bg-gray-200 text-slate-800";

  return (
    <nav className="">
      <div className="flex items-center gap-2 border-b-2 border-gray-200 py-4 px-4">
        <RiDashboardFill size={54} className="text-slate-800" />
      </div>

      <ul className="mt-16 flex items-center flex-col gap-6">
        <li className={menuItemClass}>Home</li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <FaArrowRightArrowLeft size={24} />
          </div>
          Menu2
        </li>
        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <FaTruckFront size={24} />
          </div>
          Menu3
        </li>
        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <FaUsers size={24} />
          </div>
          Menu4
        </li>
        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <FaTruck size={24} />
          </div>
          Menu5
        </li>
        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <FaTruckFast size={24} />
          </div>
          Menu6
        </li>
        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <HiClipboardDocumentList size={24} />
          </div>
          Menu7
        </li>
        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <SiGoogleanalytics size={24} />
          </div>
          Menu8
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

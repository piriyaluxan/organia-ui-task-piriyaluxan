import React, { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import {
  FaTruckFront,
  FaTruckFast,
  FaTruck,
  FaArrowRightArrowLeft,
} from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItemClass =
    "flex flex-col items-center justify-center gap-0.5 cursor-pointer font-semibold";

  const iconWrapperClass =
    "p-2 rounded-md transition-all hover:bg-gray-200 text-slate-800";

  return (
    <>
      {/* Mobile Menu Icon */}
      <div className="sm:hidden fixed top-4 left-2 z-50">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu size={30} />
        </button>
      </div>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed sm:static
          top-0 left-0
          h-full
          
          bg-white
          border-r border-gray-200
          z-50
          sm:z-auto
          transform
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
      >
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
    </>
  );
};

export default Sidebar;

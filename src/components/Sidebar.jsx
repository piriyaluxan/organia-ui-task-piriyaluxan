import React from "react";
import { BiTransfer } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
  const menuItemClass =
    "flex flex-col items-center justify-center gap-2 cursor-pointer font-semibold";

  const iconWrapperClass =
    "p-2 rounded-md transition-all hover:bg-gray-200 hover:text-black";

  return (
    <nav className="p-4">
      <div className="flex items-center gap-2">
        <RiDashboardFill size={54} className="text-slate-800" />
      </div>

      <ul className="mt-6 flex flex-col gap-6">
        <li>Home</li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <BiTransfer />
          </div>
          Menu2
        </li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <BiTransfer />
          </div>
          Menu3
        </li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <BiTransfer />
          </div>
          Menu4
        </li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <BiTransfer />
          </div>
          Menu5
        </li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <BiTransfer />
          </div>
          Menu6
        </li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <BiTransfer />
          </div>
          Menu7
        </li>

        <li className={menuItemClass}>
          <div className={iconWrapperClass}>
            <BiTransfer />
          </div>
          Menu8
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

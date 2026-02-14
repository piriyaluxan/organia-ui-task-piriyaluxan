import React from "react";
import { LuBellDot } from "react-icons/lu";
import { TbUser } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 pl-2 sm:pl-4 bg-white sm:pt-4 pt-8">
      <div className="flex items-center justify-between w-full sm:gap-4 sm:p-2 sm:pt-0 pt-4 border-r border-gray-300">
        <div className="text-xl flex font-bold">Main Title</div>
        <div>
          <LuBellDot size={36} className="rounded-full p-1" />
        </div>
      </div>
      <div className="flex items-center gap-2 w-60  px-3 pb-2">
        <TbUser
          size={36}
          className="text-white bg-slate-800 rounded-full p-1.5 font-bold"
        />
        <span className="font-bold text-xl flex truncate">John Smith</span>
      </div>
    </div>
  );
};

export default Header;

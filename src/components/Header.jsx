import React from "react";
import { LuBellDot } from "react-icons/lu";
import { TbUser } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-300 pl-4 bg-white">
      <div className="flex items-center justify-between w-full gap-4 p-2 border-r border-gray-300">
        <div className="text-xl flex font-bold">Main Title</div>
        <div>
          <LuBellDot size={36} className="rounded-full p-1" />
        </div>
      </div>
      <div className="flex items-center gap-2 w-60  px-3">
        <TbUser
          size={36}
          className="text-white bg-slate-800 rounded-full p-1.5 font-bold"
        />
        <span className="font-bold text-xl">John Smith</span>
      </div>
    </div>
  );
};

export default Header;

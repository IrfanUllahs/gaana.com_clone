import React from "react";
import { IoMenu } from "react-icons/io5";
import Searchbar from "./Searchbar";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [themeMode, setthemeMode] = useState(true);
  return (
    <nav className="bg-[#f5f5f5] h-[70px] flex w-full text-white items-center px-10 gap-4 ">
      {/* the menu is here */}
      <div>
        <IoMenu size="30px" className="text-black cursor-pointer" />
      </div>
      {/* logo is here */}
      <div className="h-[40px] cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gaana_%28music_streaming_service%29_logo.png"
          alt="brandlog"
          className="h-full"
        />
      </div>
      {/* search section is here */}
      <div className="w-[50%] mx-[20px]  ">
        <Searchbar />
      </div>
      {/* offer section is here */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-[11px] px-2 py-2 cursor-pointer">
        Welcom Offer: 1 Month Trial @ 1
      </div>
      {/* get gaana plus */}
      <div className="border-red-500 border rounded-full text-[14px] text-red-500 px-1 py-1 cursor-pointer">
        Get gaana plus
      </div>
      {/* theme mode is here */}
      <div
        onClick={() => setthemeMode((prev) => !prev)}
        className="cursor-pointer"
      >
        {themeMode ? (
          <MdOutlineDarkMode size="25" className="text-gray-500" />
        ) : (
          <MdOutlineLightMode size="25" className="text-gray-500" />
        )}
      </div>
    </nav>
  );
}

export default Header;

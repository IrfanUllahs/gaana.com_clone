import React from "react";
import { IoMenu } from "react-icons/io5";
import Searchbar from "./Searchbar";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

function Header() {
  const [thememode, setThemomde] = useState(() => {
    const storedTheme = localStorage.getItem("themeMode");
    return storedTheme ? storedTheme === "light" : true;
  });

  useEffect(() => {
    localStorage.setItem("themeMode", thememode ? "light" : "dark");
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(thememode ? "light" : "dark");
  }, [thememode]);
  return (
    <nav className="flex ">
      {/* the menu is here */}
      <div className="bg-[#f5f5f5] h-[70px]  w-full text-white items-center px-10 gap-3 dark:bg-[#222428] lg:flex hidden  ">
        <div>
          <IoMenu
            size="30px"
            className="text-black cursor-pointer dark:text-white"
          />
        </div>
        {/* logo is here */}
        <div className="h-[30px] cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gaana_%28music_streaming_service%29_logo.png"
            alt="brandlog"
            className="h-full"
          />
        </div>
        {/* search section is here */}
        <div className="w-[50%]  ">
          <Searchbar />
        </div>
        {/* offer section is here */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-[11px] px-2 py-2 cursor-pointer text-nowrap">
          Welcom Offer: 1 Month Trial @ 1
        </div>
        {/* get gaana plus */}
        <div className="border-red-500 border rounded-full text-[14px] text-red-500 px-1 py-1 cursor-pointer dark:bg-white dark:text-black dark:border-transparent text-nowrap">
          Get gaana plus
        </div>
        {/* theme mode is here */}
        <div
          onClick={() => setThemomde((prev) => !prev)}
          className="cursor-pointer"
        >
          {thememode ? (
            <MdOutlineDarkMode size="25" className="text-gray-500" />
          ) : (
            <MdOutlineLightMode size="25" className="text-gray-300" />
          )}
        </div>
      </div>
      {/* for small screens */}
      <div className="bg-[#f5f5f5] h-[130px]  w-full  border-black justify-center gap-6 dark:bg-[#222428] lg:hidden flex  flex-col py-2 items-center ">
        <div className="flex justify-between w-full items-center px-[10px]">
          <div>
            <IoMenu
              size="30px"
              className="text-black cursor-pointer dark:text-white"
            />
          </div>
          {/* logo is here */}
          <div className="h-[30px] cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Gaana_%28music_streaming_service%29_logo.png"
              alt="brandlog"
              className="h-full"
            />
          </div>
          {/* search section is here */}

          {/* theme mode is here */}
          <div
            onClick={() => setThemomde((prev) => !prev)}
            className="cursor-pointer"
          >
            {thememode ? (
              <MdOutlineDarkMode size="25" className="text-gray-500" />
            ) : (
              <MdOutlineLightMode size="25" className="text-gray-300" />
            )}
          </div>
        </div>
        <div className="w-[100%]  ">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}

export default Header;

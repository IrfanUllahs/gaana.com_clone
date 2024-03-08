import React from "react";
import { IoMenu } from "react-icons/io5";
import Searchbar from "./Searchbar";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
const musicCategories = [
  "All",
  "Trending Songs",
  "New Songs",
  "Old Songs",
  "Moods & Genres",
  "Top Playlist",
  "Top Artist",
];
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
    <nav className="flex flex-col ">
      {/* the menu is here */}
      <div className="bg-[#f5f5f5] h-[70px] flex w-full text-white items-center px-10 gap-4 dark:bg-[#222428]  ">
        <div>
          <IoMenu
            size="30px"
            className="text-black cursor-pointer dark:text-white"
          />
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
        <div className="border-red-500 border rounded-full text-[14px] text-red-500 px-1 py-1 cursor-pointer dark:bg-white dark:text-black dark:border-transparent">
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
      <div className="flex gap-10 px-10 py-4 dark:bg-[#1B1B1B] dark:text-white justify-center text-[16px] text-gray-700  ">
        {musicCategories.map((music, index) => (
          <div key={index} className="relative group ">
            <p>
              {music}{" "}
              <div className="h-[2px] bg-red-600 w-0 group-hover:w-full duration-300  "></div>
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Header;

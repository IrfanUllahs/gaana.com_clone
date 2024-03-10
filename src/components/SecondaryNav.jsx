import React from "react";

const musicCategories = [
  "All",
  "Trending Songs",
  "New Songs",
  "Old Songs",
  "Moods & Genres",
  "Top Playlist",
  "Top Artist",
];

function SecondaryNav() {
  return (
    <div className="flex gap-5 px-5 py-4 dark:bg-[#1B1B1B] dark:text-white justify-start lg:justify-center text-[16px] text-gray-700  bg-white  border-1 border-red-600 lg:overflow-hidden overflow-x-auto w-full">
      {musicCategories.map((music, index) => (
        <p key={index} className="border-1 w-fit text-nowrap">
          {music}
          <div className="h-[2px] bg-red-600 w-0 group-hover:w-full duration-300  "></div>
        </p>
      ))}
    </div>
  );
}

export default SecondaryNav;

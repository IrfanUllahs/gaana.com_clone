import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="p-2 text-gray-400 focus-within:text-gray-600 group relative  ">
      {/* Added overflow: hidden; to prevent content overflowing */}
      <div className="absolute -top-5 left-0 w-full overflow-hidden group-focus-within:h-[450px] group-focus-within:bg-white group-focus-within:border-gray-300 group-focus-within:rounded-xl  group-focus-within:border   ">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="p-2 focus-within:p-0 focus-within:py-2  text-gray-400 focus-within:text-gray-600 group "
        >
          <div className="flex flex-row justify-start items-center rounded-full bg-white h-[40px] w-[100%] gap-2 text-[12px]  group-focus-within:border-b overflow-hidden group-focus-within:rounded-none   ">
            <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
            <input
              name="search-field"
              autoComplete="off"
              id="search-field"
              placeholder="search Artist,Song,Albums"
              type="search"
              value={searchTerm}
              className="bg-transparent outline-none  w-full h-full rounded-full"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;

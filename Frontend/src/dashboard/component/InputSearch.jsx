import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const InputSearch = () => {
  return (
    <div className="flex justify-center items-center gap-x-4 border border-gray-300 rounded-md px-3 w-3/5">
      <input
        type="text"
        className="flex-1 outline-none border-none"
        name="search"
        placeholder="Cari Cerita..."
      />
      <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
    </div>
  );
};

export default InputSearch;

import React from "react";
import { Search, Settings } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:px-4 dark:py-3">
      Navbar
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2  mr-2 h-5 w-5 -translate-y-1/2 transform cursor-poiter dark:text-white" />
          <input
            className="w-full roundedb border-none  bg-gray-100 p-2 pl-8 palceholder:gray-500 focus:borader-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center">
        <Link
          href="settings"
          className="h-min w-min rounded p-2  hover:bg-gray-100"
        >
          <Settings className="h-6 w-6 cursor-pointer" />
        </Link>
        <div className="ml-2 mr-5 hidden mon-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;

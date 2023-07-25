// CountryListHeader.js

import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import useDarkMode from "./hooks/useDarkMode";

const CountryListHeader = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white drop-shadow-lg">
      <div className="flex justify-between p-5 lg:mx-[3rem]">
        <h1 className="text-2xl font-medium">Country Lists</h1>
        <div className="flex items-center gap-3">
          {isDarkMode ? <BsMoon /> : <BsSun />}
          <button className="text-sm" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Switch Light Mode" : "Switch Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryListHeader;

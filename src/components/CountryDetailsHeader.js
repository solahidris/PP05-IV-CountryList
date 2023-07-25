// CountryDetailsHeader.js

import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import useDarkMode from "./hooks/useDarkMode";

const CountryDetailsHeader = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white drop-shadow-lg mb-5">
      <div className="flex justify-between p-5">
        <h1 className="text-xl font-semibold">Country Details</h1>
        <div className="flex items-center gap-3">
          {isDarkMode ? <BsSun /> : <BsMoon />}
          <button className="text-sm" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Switch Light Mode" : "Switch Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsHeader;

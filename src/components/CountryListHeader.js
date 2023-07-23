// CountryListHeader.js

import React from "react";
import { BsSun } from "react-icons/bs";

const CountryListHeader = () => {
  return (
    <div className="bg-white drop-shadow-lg">
      <div className="flex justify-between p-5">
        <h1 className="text-xl font-semibold">Country Lists</h1>
        <div className="flex items-center gap-3">
        <BsSun /> 
        <button className="text-sm">Switch Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default CountryListHeader;

// CountryDetailsHeader.js

import React from "react";
import { BsSun } from "react-icons/bs";

const CountryDetailsHeader = () => {
  return (
    <div className="bg-white drop-shadow-lg mb-5">
      <div className="flex justify-between p-5">
        <h1 className="text-2xl font-medium">Country Details</h1>
        <div className="flex items-center gap-3">
        <BsSun /> 
        <button className="text-sm">Switch Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsHeader;

// CountryListHeader.js

import React from "react";

const CountryListHeader = () => {
  return (
    <div className="bg-stone-100 drop-shadow-lg">
      <div className="flex justify-between p-5">
        <h1 className="text-xl font-semibold">Country List</h1>
        <button className="text-sm">🌒 Dark Mode</button>
      </div>
    </div>
  );
};

export default CountryListHeader;

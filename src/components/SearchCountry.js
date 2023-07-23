// SearchCountry.js

import React from "react";

const SearchCountry = () => {
  return (
    <div className="py-5">
      {/* <p>L-Search for a Country</p> */}
      <input
        type="text"
        placeholder="🔍   Search for a country"
        className="py-3 px-3 ml-4 text-xs rounded-md border border-stone-300 w-full"
      />
    </div>
  );
};

export default SearchCountry;
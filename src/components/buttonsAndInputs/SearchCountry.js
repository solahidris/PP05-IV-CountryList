// SearchCountry.js

import React, { useState } from "react";

const SearchCountry = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="py-5 px-1 flex">
      {/* Search for a Country */}
      <input
        type="text"
        placeholder="🔍 Search for a country"
        value={searchText}
        onChange={handleChange}
        className="py-2 px-2 lg:px-[3rem] ml-4 text-xs rounded-md border border-stone-300 bg-white dark:border-slate-600 dark:bg-slate-800 dark:text-white w-full"
      />
    </div>
  );
};

export default SearchCountry;

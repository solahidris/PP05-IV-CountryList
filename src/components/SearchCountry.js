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
    <div className="py-5">
      {/* <p>L-Search for a Country</p> */}
      <input
        type="text"
        placeholder="🔍   Search for a country"
        value={searchText}
        onChange={handleChange}
        className="py-3 px-3 lg:px-[3rem] ml-4 text-xs rounded-md border border-stone-300 bg-white w-full"
      />
    </div>
  );
};

export default SearchCountry;

import React from "react";

const SearchCountry = () => {
  return (
    <div className="bg-green-300 py-5">
      {/* <p>L-Search for a Country</p> */}
      <input
        type="text"
        placeholder="🔍   Search for a country"
        className="py-3 px-5 ml-5 rounded-md border border-stone-300 w-full"
      />
    </div>
  );
};

export default SearchCountry;

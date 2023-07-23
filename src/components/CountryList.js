import React from "react";
import CountryListHeader from "./CountryListHeader";
import SearchCountry from "./SearchCountry";
import FilterRegion from "./FilterRegion";
import ViewToggleButton from "./ViewToggleButton";

const CountryList = () => {
  return (
    <div>
      <CountryListHeader />

        {/* Delete text px later */}
      <div className="flex justify-between text-[8px]">
        <SearchCountry />
        <div className="flex bg-red-200">
          <FilterRegion />
          <div className="bg-red-400 flex">
            <span>R-List View</span>
            <ViewToggleButton />
            {/* <span>R-Toggle Button</span> */}
            <span>R-Card View</span>
          </div>
        </div>
      </div>

      <div className="list view - use grid bg-blue-200">
        <div className="bg-blue-400 flex justify-between">
          <span>Empty</span>
          <span>Population</span>
          <span>Region</span>
          <span>Capital</span>
          <span>Country</span>
          <span>Currency</span>
        </div>
        <div className="map this">
          flagImage population region capital countryName currency
        </div>
      </div>

      <div className="card view - use flex col bg-green-200">
        <div className="map this">
          <div className="flex flex-col">
            <span>flagImage</span>
            <span>CountryName</span>
            <span>Population: xxx</span>
            <span>Region: xxx</span> 
            <span>Capital: xxx</span>
          </div>
        </div>
      </div>

      <p className="bg-yellow-200">test test</p>
    </div>
  );
};

export default CountryList;

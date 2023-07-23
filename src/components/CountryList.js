import React from "react";
import CountryListHeader from "./CountryListHeader";
import SearchCountry from "./SearchCountry";
import FilterRegion from "./FilterRegion";
import ViewToggleButton from "./ViewToggleButton";
import { IoList, IoGridOutline } from "react-icons/io5";

const CountryList = () => {
  return (
    <div>
      <CountryListHeader />

        {/* Delete text px later */}
      <div className="flex justify-between text-[8px]">
        <SearchCountry />
        <div className="flex">
          <FilterRegion />
          <div className="flex items-center">
            <IoList className="w-[20px] h-[20px] mx-3"/>
            <ViewToggleButton/>
            <IoGridOutline className="w-[20px] h-[20px] mx-3"/>
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

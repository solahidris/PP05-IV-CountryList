// CountryLists.js

import React, { useState } from "react";
import CountryListHeader from "./CountryListHeader";
import SearchCountry from "./SearchCountry";
import FilterRegion from "./FilterRegion";
import ViewToggleButton from "./ViewToggleButton";
import { IoList, IoGridOutline } from "react-icons/io5";
import ListViewScreen from "./ListViewScreen";
import CardViewScreen from "./CardViewScreen";
import useCountryData from "./useCountryData";

const CountryLists = () => {
  const [cardView, setCardView] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleToggleView = () => {
    setCardView(!cardView);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleRegionFilter = (region) => {
    setSelectedRegion(region);
  };

  const data = useCountryData();

  return (
    <div>
      <CountryListHeader />

      <div className="flex justify-between lg:mx-[3rem]">
        <SearchCountry onSearch={handleSearch} />
        <div className="flex">
          <FilterRegion data={data} onFilter={handleRegionFilter} />
          <div className="flex items-center">
            <IoList className="w-[17px] h-[17px] mx-3" />
            <ViewToggleButton onToggle={handleToggleView} />
            <IoGridOutline className="w-[17px] h-[17px] mx-3" />
          </div>
        </div>
      </div>

      {cardView ? (
        <CardViewScreen data={data} searchText={searchText} selectedRegion={selectedRegion} />
      ) : (
        <ListViewScreen data={data} searchText={searchText} selectedRegion={selectedRegion} />
      )}

      <p className="bg-yellow-100 mt-5">----- end of app. below is documentation ------</p>
    </div>
  );
};

export default CountryLists;

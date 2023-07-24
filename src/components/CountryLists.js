// CountryLists.js

import React, { useState } from "react";
import CountryListHeader from "./CountryListHeader";
import SearchCountry from "./SearchCountry";
import FilterRegion from "./FilterRegion";
import ViewToggleButton from "./ViewToggleButton";
import { IoList, IoGridOutline } from "react-icons/io5";
import ListViewScreen from "./ListViewScreen";
// eslint-disable-next-line
import CardViewScreen from "./CardViewScreen";

const CountryLists = () => {

  const [cardView, setCardView] = useState(false);
  
  return (
    <div>
      <CountryListHeader />

      <div className="flex justify-between lg:mx-[3rem]">
        <SearchCountry />
        <div className="flex">
          <FilterRegion />
          <div className="flex items-center">
            <IoList className="w-[17px] h-[17px] mx-3"/>
            <ViewToggleButton/>
            <IoGridOutline className="w-[17px] h-[17px] mx-3"/>
          </div>
        </div>
      </div>

      <ListViewScreen />
      <CardViewScreen />



      <p className="bg-yellow-100 mt-5">----- end of app. below is documentation ------</p>
    </div>
  );
};

export default CountryLists;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryListHeader from "./CountryListHeader";
import SearchCountry from "./SearchCountry";
import FilterRegion from "./FilterRegion";
import ViewToggleButton from "./ViewToggleButton";
import { IoList, IoGridOutline } from "react-icons/io5";
import ListViewScreen from "./ListViewScreen";
import CardViewScreen from "./CardViewScreen";
import CountryDetails from "./CountryDetails";
import useCountryData from "./useCountryData";

const CountryLists = () => {

  const CountryListView = ({ cardView, data, searchText, selectedRegion, onSearch, onRegionFilter, onToggleView }) => {
    return (
      <>
        <CountryListHeader />
        <div className="flex justify-between lg:mx-[3rem]">
          <SearchCountry onSearch={onSearch} />
          <div className="flex">
            <FilterRegion data={data} onFilter={onRegionFilter} />
            <div className="flex items-center">
              <IoList className="w-[17px] h-[17px] mx-3" />
              <ViewToggleButton onToggle={onToggleView} />
              <IoGridOutline className="w-[17px] h-[17px] mx-3" />
            </div>
          </div>
        </div>
        {cardView ? (
          <CardViewScreen data={data} searchText={searchText} selectedRegion={selectedRegion} />
        ) : (
          <ListViewScreen data={data} searchText={searchText} selectedRegion={selectedRegion} />
        )}
      </>
    );
  };

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
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <CountryListView
                cardView={cardView}
                data={data}
                searchText={searchText}
                selectedRegion={selectedRegion}
                onSearch={handleSearch}
                onRegionFilter={handleRegionFilter}
                onToggleView={handleToggleView}
              />
            }
          />
          <Route
            path="/country/:countryId"
            element={<CountryDetails data={data} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default CountryLists;

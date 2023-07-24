// CountryDetails.js

import React from "react";
import CountryDetailsHeader from "./CountryDetailsHeader";
import CountryDetailsScreen from "./CountryDetailsScreen";
import { Routes, Route } from "react-router-dom";

const CountryDetails = ({ data }) => {
  return (
    <div>
      <CountryDetailsHeader />
      <Routes>
        <Route path="/" element={<CountryDetailsScreen data={data} />} />
      </Routes>
      <p className="bg-yellow-100 mt-5">----- end of app. below is documentation ------</p>
    </div>
  );
};

export default CountryDetails;

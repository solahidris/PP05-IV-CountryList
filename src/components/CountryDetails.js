// CountryDetails.js

import React from "react";
import CountryDetailsHeader from "./CountryDetailsHeader";
import CountryDetailsScreen from "./CountryDetailsScreen";
import { useParams } from "react-router-dom";
import useCountryData from "./useCountryData";

const CountryDetails = () => {
  const { countryId } = useParams();
  const data = useCountryData();

  // Find the country data based on the countryId (cca3)
  const country = data.find((item) => item.cca3 === countryId);

  if (!country) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <CountryDetailsHeader />
      <CountryDetailsScreen country={country} />
    </div>
  );
};

export default CountryDetails;

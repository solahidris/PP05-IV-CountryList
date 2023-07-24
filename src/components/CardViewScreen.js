// CardViewScreen.js

import React from "react";
import { Link } from "react-router-dom";
import useCountryData from "./useCountryData";

const CardViewScreen = ({ searchText, selectedRegion }) => {
  const data = useCountryData();

  // Filter data based on search text and region
  const filteredData = data.filter((item) => {
    const name = item.name?.common.toLowerCase();
    const region = item.region.toLowerCase();
    const search = searchText.toLowerCase();
    const selected = selectedRegion.toLowerCase();
    return name.includes(search) && (selected === "" || region === selected);
  });

  return (
    <div className="mx-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-[1.5rem]">
        {filteredData.map((item, index) => (
          <Link key={index} to={`/country/${item.cca3}`}>
            <div className="flex flex-col text-sm lg:text-base">
              {/* Replace flag emoji with SVG */}
              <img
                src={item?.flags?.svg}
                alt={item?.name?.common}
                style={{ width: "100%", height: "8rem", objectFit: "fill" }}
                className="justify-self-center"
              />
              <div className="bg-white rounded drop-shadow-md px-2 py-3 mt-3">
                <span className="font-semibold">{item?.name?.common}</span>
                <div className="flex gap-1">
                  <span className="font-semibold">Population:</span>
                  <span className="text-stone-400">{item?.population}</span>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">Region:</span>
                  <span className="text-stone-400">{item?.region}</span>
                </div>
                <div className="flex gap-1">
                  <span className="font-semibold">Capital:</span>
                  <span className="text-stone-400">{item?.capital?.[0]}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardViewScreen;

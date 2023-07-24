// CardViewScreen.js

import React from "react";

const CardViewScreen = ({ data, searchText, selectedRegion }) => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const filteredData = data.filter(
    (item) =>
      (item.name?.common.toLowerCase().includes(searchText.toLowerCase()) ||
        item.region.toLowerCase().includes(searchText.toLowerCase()) ||
        item.capital?.[0].toLowerCase().includes(searchText.toLowerCase())) &&
      (selectedRegion === "" || item.region === selectedRegion)
  );

  return (
    <div className="mx-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-[1.5rem]">
        {filteredData.map((item, index) => (
          <div className="flex flex-col text-sm lg:text-base" key={index}>
            {/* Replace flag emoji with SVG */}
            <img
              src={item?.flags?.svg}
              alt={item?.name?.common}
              style={{ width: "100%", height: "8rem", objectFit: "cover" }}
              className="justify-self-center"
            />
            <div className="bg-white rounded drop-shadow-md px-2 py-3 mt-3">
              <span className="font-semibold">{item?.name?.common}</span>
              <div className="flex gap-1">
                <span className="font-semibold">Population:</span>
                <span className="text-stone-400">{numberWithCommas(item?.population)}</span>
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
        ))}
      </div>
    </div>
  );
};

export default CardViewScreen;

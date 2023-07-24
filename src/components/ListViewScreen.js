// ListViewScreen.js

import React from "react";

const ListViewScreen = ({ data, searchText, selectedRegion }) => {
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
    <div className="mx-5 lg:mx-[4rem]">
      <div className="grid grid-cols-6 text-xs lg:text-base bg-blue-900 text-white py-4 rounded-t-md font-bold">
        <span></span>
        <span>Population</span>
        <span>Region</span>
        <span>Capital</span>
        <span>Country</span>
        <span>Currency</span>
      </div>

      <div>
        {filteredData.map((item, index) => (
          <div
            className="grid grid-cols-6 py-3 border-b border-gray-200/80 border-mx-2 items-center text-xs lg:text-base"
            key={index}
          >
            <img
              src={item?.flags?.svg}
              alt={item?.name?.common}
              style={{ width: "60px", height: "45px" }}
              className="justify-self-center"
            />
            <span className="text-ellipsis overflow-hidden hover:overflow-visible">{numberWithCommas(item?.population)}</span>
            <span>{item?.region}</span>
            <span>{item?.capital?.[0]}</span>
            <span className="truncate hover:overflow-visible">{item?.name?.common}</span>
            {item?.currencies && (
              <div>
                <span className="border rounded-lg px-2 py-1 border-black text-blue-500">
                  {Object.keys(item.currencies).join(", ")}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListViewScreen;

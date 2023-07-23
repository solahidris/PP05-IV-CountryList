import React, { useEffect, useState } from "react";
import axios from "axios";

const ListViewScreen = () => {
  const [data, setData] = useState([]);

  // Helper function to format number with commas
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    // Make a GET request to an API endpoint
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        // Handle the response data
        setData(response.data);

        // Log the object structure
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mx-5 lg:mx-[4rem]">
      <div className="grid grid-cols-6 text-xs lg:text-base bg-blue-900 text-white py-4 rounded-t-md font-bold">
        <span></span>
        <span className="truncate ...">Population</span>
        <span>Region</span>
        <span>Capital</span>
        <span>Country</span>
        <span>Currency</span>
      </div>

      <div>
        {data.map((item, index) => (
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
            <span>{numberWithCommas(item?.population)}</span>
            <span>{item?.region}</span>
            <span>{item?.capital?.[0]}</span>
            <span>{item?.name?.common}</span>
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

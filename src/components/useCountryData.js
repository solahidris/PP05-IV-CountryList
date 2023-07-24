// useCountryData.js

import { useState, useEffect } from "react";
import axios from "axios";

const useCountryData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the API endpoint
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        // Handle the response data
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error fetching data:", error);
      });
  }, []);

  return data;
};

export default useCountryData;
// CardViewScreen.js

import { HiArrowLeft } from "react-icons/hi";
import { useParams } from "react-router-dom";
import useCountryData from "./useCountryData";

const CountryDetailsScreen = () => {
  const { countryId } = useParams();
  const data = useCountryData();

  // Find the country data based on the countryId (cca3)
  const country = data.find((item) => item.cca3 === countryId);

  if (!country) {
    return <div>Loading...</div>; // You can show a loading state here
  }

  return (
    <div className="mx-5 pt-2">
      <button className="flex items-center gap-3 border border-sky-600 text-sky-600 rounded-md py-2 px-4">
        <HiArrowLeft className="text-sky-600" />
        Back
      </button>

      <div className="pt-4 flex flex-row">
        {/* SVG flag image container */}
        <img
          src={country.flags?.svg}
          alt={country.name?.common}
          style={{ width: "100%", height: "8rem", objectFit: "fill" }}
          className="justify-self-center"
        />

        <div className="flex flex-col grow ml-[1rem] lg:ml-[3rem]">
          <div className="flex flex-row text-sm grow">
            <div className="flex flex-col grow justify-between">
              <span className="text-xl font-semibold pb-2">
                {country.name.common}
              </span>
              <div className="flex gap-1">
                <span className="font-medium">Native name:</span>
                <span className="text-stone-400">
                  {country.name.native?.common}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium">Population:</span>
                <span className="text-stone-400">{country.population}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium">Region:</span>
                <span className="text-stone-400">{country.region}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium">Sub region:</span>
                <span className="text-stone-400">{country.subregion}</span>
              </div>
              <div className="flex gap-1 lg:pb-5">
                <span className="font-medium">Capital:</span>
                <span className="text-stone-400">{country.capital?.[0]}</span>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:justify-between grow">
              <div className="flex gap-1 lg:mt-[13%] lg:mt-0">
                <span className="font-medium">Top level domain:</span>
                <span className="text-stone-400">
                  {country.tld?.join(", ")}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium">Currency:</span>
                <span className="text-stone-400">
                  {Object.keys(country.currencies).join(", ")}
                </span>
              </div>
              <div className="flex gap-1 lg:mb-[25%] lg:mb-0">
                <span className="font-medium">Languages:</span>
                <span className="text-stone-400">
                  {Object.keys(country.languages).join(", ")}
                </span>
              </div>
            </div>
          </div>

          <div className="text-sm gap-1 flex items-center flex-wrap">
            <span className="font-medium gap-1">Border Countries:</span>
            {country.borders.map((border) => (
              <span
                key={border}
                className="bg-sky-600 text-white px-2 py-1 rounded text-xs"
              >
                {data.find((item) => item.cca3 === border)?.name.common}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsScreen;

// CountryDetailsScreen.js

import { HiArrowLeft } from "react-icons/hi";

const CountryDetailsScreen = () => {
  const dataToMap = [
    {
      flag: "🇦🇩",
      population: "P1",
      region: "R1",
      capital: "CA1",
      country: "CO1",
      currency: "CU1",
    },
    {
      flag: "🇦🇪",
      population: "P2",
      region: "R2",
      capital: "CA2",
      country: "CO2",
      currency: "CU2",
    },
    {
      flag: "🇦🇮",
      population: "P3",
      region: "R3",

      country: "CO3",
    },
    {
      flag: "🇦🇶",
      population: "P4",
      region: "R4",
      capital: "CA4",
      country: "CO4",
      currency: "CU4",
    },
  ];

  return (
    <div className="mx-5 pt-2">
      <button className="flex items-center gap-3 border border-sky-600 text-sky-600 rounded-md py-2 px-4">
        <HiArrowLeft className="text-sky-600" />
        Back
      </button>

        {/* DIV - main container */}
      <div className="pt-4 flex flex-row">
        {/* DIV - flag image container */}
        <div className="h-[30vw] w-[20vw] lg:h-[20vw] lg:w-[35vw] flex-none text-[5rem]">{dataToMap[1].flag}</div>
        
        <div className="flex flex-col grow ml-[1rem] lg:ml-[3rem]">
        {/* DIV - main text container - not used */}
        <div className="flex flex-row text-sm grow">
            {/* DIV - info container left */}
          <div className="flex flex-col grow justify-between">
            <span className="text-xl font-semibold pb-2">
              {dataToMap[1].country}
            </span>
            <div className="flex gap-1">
              <span className="font-medium">Native name:</span>
              <span className="text-stone-400">{dataToMap[1].region}</span>
            </div>
            <div className="flex gap-1">
              <span className="font-medium">Population:</span>
              <span className="text-stone-400">{dataToMap[1].population}</span>
            </div>
            <div className="flex gap-1">
              <span className="font-medium">Region:</span>
              <span className="text-stone-400">{dataToMap[1].region}</span>
            </div>
            <div className="flex gap-1">
              <span className="font-medium">Sub region:</span>
              <span className="text-stone-400">{dataToMap[1]?.subRegion}</span>
            </div>
            <div className="flex gap-1 lg:pb-5">
              <span className="font-medium">Capital:</span>
              <span className="text-stone-400">{dataToMap[1]?.capital}</span>
            </div>
          </div>

            {/* DIV - info container right */}
          <div className="flex flex-col justify-center lg:justify-between grow">
            <div className="flex gap-1 lg:mt-[13%] lg:mt-0">
              <span className="font-medium">Top level domain:</span>
              <span className="text-stone-400">
                {dataToMap[1]?.topLevelDomain}
              </span>
            </div>
            <div className="flex gap-1">
              <span className="font-medium">Currency:</span>
              <span className="text-stone-400">{dataToMap[1]?.currency}</span>
            </div>
            <div className="flex gap-1 lg:mb-[25%] lg:mb-0">
              <span className="font-medium">Languages:</span>
              <span className="text-stone-400">{dataToMap[1]?.languages}</span>
            </div>
          </div>
        </div>

            {/* DIV - info container bottom */}
        <div className="text-sm gap-1 flex items-center flex-wrap">
          <span className="font-medium gap-1">Border Countries:</span>
          <span className="bg-sky-600 text-white px-2 py-1 rounded text-xs">Iraq</span>
          <span className="bg-sky-600 text-white px-2 py-1 rounded text-xs">Israel</span>
          <span className="bg-sky-600 text-white px-2 py-1 rounded text-xs">Palestine</span>
          <span className="bg-sky-600 text-white px-2 py-1 rounded text-xs">Saudi Arabia</span>
          <span className="bg-sky-600 text-white px-2 py-1 rounded text-xs">Syria</span>
        </div>

        </div>

      </div>

    </div>
  );
};

export default CountryDetailsScreen;

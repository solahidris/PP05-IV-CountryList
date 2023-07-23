// CardViewScreen.js

const CardViewScreen = () => {
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
    <div className="mx-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-[1.5rem]">
        {dataToMap.map((data, index) => (
          <div className="flex flex-col text-sm lg:text-base">
            <span className="bg-red-200">{data.flag}</span>
            <div className="bg-white rounded drop-shadow-md px-2 py-3 mt-3">
              <span className="font-semibold">{data.country}</span>
              <div className="flex gap-1">
                <span className="font-semibold">Population:</span>
                <span className="text-stone-400">{data.region}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-semibold">Region:</span>
                <span className="text-stone-400">{data.population}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-semibold">Capital:</span>
                <span className="text-stone-400">{data?.capital}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardViewScreen;
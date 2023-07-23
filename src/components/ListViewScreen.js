// ListViewScreen.js

const ListViewScreen = () => {
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

      <div className="grid grid-cols-6 text-xs bg-blue-900 text-white py-4 rounded-t-md font-bold">
        <span></span>
        <span className="truncate ...">Population</span>
        <span>Region</span>
        <span>Capital</span>
        <span>Country</span>
        <span>Currency</span>
      </div>

      <div>
        {dataToMap.map((data, index) => (
          <div className="grid grid-cols-6 py-5 border-b border-gray-200/80 border-mx-2 items-center text-xs">
            <span className="text-center text-[3rem]">{data.flag}</span>
            <span>{data.population}</span>
            <span>{data.region}</span>
            <span>{data?.capital}</span>
            <span>{data.country}</span>
            {data.currency && (
              <div>
                <span className="border rounded-lg px-2 py-1 border-black text-blue-500">
                  {data.currency}
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

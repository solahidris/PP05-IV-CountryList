// FilterRegion.js

import React from "react";

const FilterRegion = ({ data, onFilter }) => {
  const handleChange = (event) => {
    const selectedRegion = event.target.value;
    onFilter(selectedRegion);
  };

  const regions = data.map((item) => item.region);
  const uniqueRegions = [...new Set(regions)];

  return (
    <div className="self-center">
      <select
        className="py-4 lg:py-3 px-2 lg:px-[3rem] rounded-md border border-stone-300 text-xs bg-white text-stone-500 dark:border-slate-600 dark:bg-slate-800"
        onChange={handleChange}
      >
        <option value="">Filter by Region</option>
        {uniqueRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterRegion;

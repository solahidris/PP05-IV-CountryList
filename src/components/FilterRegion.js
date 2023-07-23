// FilterRegion.js

const FilterRegion = () => {
    return(
        <div className="self-center">
            <select className="py-3 px-2 rounded-md border border-stone-300 text-xs bg-white text-stone-500">
                <option selected>Filter by Region</option>
                <option value="vA">cA</option>
                <option value="vB">cB</option>
                <option value="vC">cC</option>
            </select>
        </div>
    )
};

export default FilterRegion;
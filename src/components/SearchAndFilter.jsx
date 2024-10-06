function SearchAndFilter({
  mode,
  input,
  setInput,
  region,
  setRegion,
  data,
  setFilteredData,
}) {
  const handleFilter = (searchValue, selectedRegion) => {
    const filteredData = data.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesRegion = selectedRegion
        ? country.region.toLowerCase() === selectedRegion.toLowerCase()
        : true;
      return matchesSearch && matchesRegion;
    });
    setFilteredData(filteredData);
  };
  return (
    <div
      className={`search-and-filter ${
        mode === "light" ? "light-mode" : "dark-mode"
      }`}
    >
      <div
        className={`search-and-filter--input ${
          mode === "light" ? "light-mode" : "search-and-filter--input--dark"
        }`}
      >
        <i className="fa-solid fa-search"></i>
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => {
            const searchValue = e.target.value;
            setInput(searchValue);
            handleFilter(searchValue, region);
          }}
        />
      </div>

      <select
        value={region}
        onChange={(e) => {
          const selectedRegion = e.target.value;
          setRegion(selectedRegion);
          handleFilter(input, selectedRegion);
        }}
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;

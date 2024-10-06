import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchAndFilter from "./components/SearchAndFilter";
import Countries from "./components/Countries";

function App() {
  const [mode, setMode] = useState("light");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <SearchAndFilter
        mode={mode}
        input={input}
        setInput={setInput}
        region={region}
        setRegion={setRegion}
        data={data}
        setFilteredData={setFilteredData}
      />
      {filteredData.length === 0 && (
        <p className="no-results">No results found for {input}...</p>
      )}
      <Countries mode={mode} filteredData={filteredData} />
    </>
  );
}

export default App;

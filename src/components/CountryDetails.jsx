import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails({ mode }) {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        setCountryData(data[0]);
        console.log(countryName);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryData();
  }, [countryName]);

  if (!countryData) {
    return <div className="results--error">Loading country details...</div>;
  }

  return (
    <div className="country--details--container">
      <div
        className={`country--details $ ${
          mode === "light" ? "light-mode" : "dark-mode"
        }`}
      >
        <button onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>
        <div>
          <img src={countryData.flags.svg} alt={countryData.name.common} />
          <div>
            <h1>{countryData.name.common}</h1>
            <p>Capital: {countryData.capital}</p>
            <p>Region: {countryData.region}</p>
            <p>Population: {countryData.population}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;

import { useNavigate } from "react-router-dom";

function Countries({ mode, filteredData }) {
  const navigate = useNavigate();
  return (
    <div
      className={`Countries $ ${mode === "light" ? "light-mode" : "dark-mode"}`}
    >
      {filteredData.map((country) => (
        <div
          key={country.name.common}
          className="country-card"
          onClick={() => {
            navigate("country/" + country.name.common);
          }}
        >
          <img src={country.flags.svg} alt={country.name.common} />
          <div className="country-details">
            <h4>{country.name.common}</h4>
            <p>
              Poulation: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;

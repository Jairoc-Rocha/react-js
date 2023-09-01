import Country from "./Country";

import "./Countries.css";

export default function Countries({
  children: countries = [],
  onCountryClick = null,
}) {
  return (
    <div className="countries-container">
      <h2>{countries.length} país(es)</h2>

      {countries.map((country) => {
        return (
          <Country onCountryClick={onCountryClick} key={country.id}>
            {country}
          </Country>
        );
      })}
    </div>
  );
}

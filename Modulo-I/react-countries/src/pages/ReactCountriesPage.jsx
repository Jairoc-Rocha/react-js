import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("Argentina");

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const countryFilteredLowercase = countryFilter.toLocaleLowerCase();

  const filteredCountries =
    countryFilteredLowercase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilteredLowercase);
        })
      : allCountries;

  console.log(filteredCountries);

  return (
    <div>
      <Header>react-countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do país (pelo menos 3 caracteres)"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
        />
      </Main>
    </div>
  );
}

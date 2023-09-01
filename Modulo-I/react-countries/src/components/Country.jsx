import "./Country.css";
import Item from "./Item";

export default function Country({
  children: country = null,
  onCountryClick = null,
}) {
  if (!country) {
    return <div>Impossível renderizar o país</div>;
  }

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.id);
    }
  }

  const demographicDensity = country.population / country.area;
  const { flag, name, capital, region, population, area } = country;

  return (
    <div onClick={handleCountryClick} className="country-container">
      <img className="w-48" src={flag} alt={name} />
      <ul>
        <li>
          <Item label="Nome:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Região:">{region}</Item>
        </li>
        <li>
          <Item label="População:">{population}</Item>
        </li>
        <li>
          <Item label="Área:">{area}</Item>
        </li>
        <li>
          <Item label="Densidade Demográfica">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}

import "./Item.css";

export default function Item({ children: value = "Valor", label = "Nome:" }) {
  return (
    <span className="item-container">
      <strong>{label}</strong> {value}
    </span>
  );
}

import "./CheckBoxInput.css";

export default function CheckBoxInput({
  labelDescription = "Descrição do checkbox",
  inputValue = "Valor padrão do input",
  onCheckboxChange = null,
  id = "id_do_input_checkbox",
  autoFocus = false,
}) {
  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        autoFocus={autoFocus}
        value={inputValue}
        onChange={handleInputChange}
      />
      <label htmlFor={id}>{labelDescription}</label>
    </div>
  );
}

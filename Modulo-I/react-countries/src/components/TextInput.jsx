import "./TextInput.css";

export default function TextInput({
  labelDescription = "Descrição do label:",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  id = "id_do_text_input",
  autoFocus = false,
}) {
  function handleInputChange(event) {
    if (onInputChange) {
      const newValue = event.currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="text-container">
      <label htmlFor={id}>{labelDescription}</label>
      <input
        type="text"
        id={id}
        autoFocus={autoFocus}
        value={inputValue}
        onChange={handleInputChange}
        autoComplete="off"
      />
    </div>
  );
}

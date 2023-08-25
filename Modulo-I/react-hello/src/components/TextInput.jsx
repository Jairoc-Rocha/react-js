export default function TextInput({
  labelDescription = "Descrição do label:",
  inputValue = "Valor padrão do input",
  onInputChange = null,
}) {
  function handleInputChange(event) {
    if (onInputChange) {
      const newValue = event.currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div>
      <label htmlFor="inputName">{labelDescription}</label>
      <input
        type="text"
        id="inputName"
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default function DateInput({
  labelDescription = "Descrição do label:",
  inputValue = "2021-04-30",
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
        type="date"
        id="inputName"
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

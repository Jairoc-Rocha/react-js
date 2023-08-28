import "./DateInput.css";

export default function DateInput({
  labelDescription = "Descrição do label:",
  inputValue = "2021-04-30",
  onInputChange = null,
  id = "id_do_date_input",
  autoFocus = false,
}) {
  function handleInputChange(event) {
    if (onInputChange) {
      const newValue = event.currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="date-container">
      <label htmlFor={id}>{labelDescription}</label>
      <input
        type="date"
        id={id}
        autoFocus={autoFocus}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

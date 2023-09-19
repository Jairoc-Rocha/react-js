import { getNewId } from "../services/idService";
import "./RadioButton.css";

export default function RadioButton({
  id = getNewId(),
  name = "radioButtonName",
  children: buttonDescription = "Descrição do botão",
  buttonChecked = false,
  onButtonClick = null,
}) {
  function handleRadioButtonChange() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <div className="radiobutton">
      <input
        type="radio"
        id={id}
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
}

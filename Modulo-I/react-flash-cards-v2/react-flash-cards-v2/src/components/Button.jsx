import "./Button.css";

export default function Button({
  children: description = "Descrição do botão",
  onButtonClick = null,
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <div className="button">
      <button className="button-container" onClick={handleButtonClick}>
        {description}
      </button>
    </div>
  );
}

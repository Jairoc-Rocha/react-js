import "./FlashCard.css";

export default function FlashCard({
  id,
  title = "Título do card",
  description = "Descrição do card que pode conter mais palavras que o título",
  showFlashCardTitle = true,
  onToggleFlashCard = null,
}) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const showSizeClassName = showFlashCardTitle ? "text-xl" : "text-md";

  return (
    <div
      className={`flash-container ${showSizeClassName}`}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}

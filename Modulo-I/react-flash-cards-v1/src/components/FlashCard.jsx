import { useState } from "react";
import "./FlashCard.css";
import { allFlashCard } from "../data/allFlashCards";

export default function FlashCard({
  title = "Título do card",
  description = "Descrição do card que pode conter mais palavras que o título",
}) {
  const [showTitle, setShowTitle] = useState(true);

  function handleCardClick() {
    // setShowTitle(!showTitle);
    setShowTitle((currentShowTitle) => !currentShowTitle);
  }

  const showSizeClassName = showTitle ? "text-xl" : "text-md";

  console.log(allFlashCard);

  return (
    <div
      className={`flash-container ${showSizeClassName}`}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}

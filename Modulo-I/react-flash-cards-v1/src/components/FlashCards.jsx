import "./FlashCards.css";

export default function FlashCards({ children: flashcards }) {
  return <div className="flashcards-container">{flashcards}</div>;
}

import { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { allFlashCard } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";

export default function FlashCardsPage() {
  const [allcards, setAllCards] = useState(allFlashCard);

  function handleButtonClick() {
    const suffledCards = helperShuffleArray(allcards);
    setAllCards(suffledCards);
  }

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <Button onButtonClick={handleButtonClick}>Ambaralhar cards</Button>
        <FlashCards>
          {allcards.map(({ id, title, description }) => {
            return (
              <FlashCard key={id} title={title} description={description} />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}

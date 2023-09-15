import { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { allFlashCard } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";

import "./FlashCardsPage.css";

export default function FlashCardsPage() {
  const [allcards, setAllCards] = useState(allFlashCard);
  const [showTitle, setShowTitle] = useState(true);

  function handleButtonClick() {
    const suffledCards = helperShuffleArray(allcards);
    setAllCards(suffledCards);
  }

  function handleRadioShowDescriptionClick() {
    setShowTitle(false);
  }

  function handleRadioShowTitleClick() {
    setShowTitle(true);
  }

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <Button onButtonClick={handleButtonClick}>Ambaralhar cards</Button>
        <div className="radiobutton-container">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            buttonChecked={showTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar Título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDiscription"
            name="showInfo"
            buttonChecked={showTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar Descrição
          </RadioButton>
        </div>

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

import { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { allFlashCards } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";

import "./FlashCardsPage.css";

export default function FlashCardsPage() {
  const [allcards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  function handleButtonClick() {
    const suffledCards = helperShuffleArray(allcards);

    setAllCards(suffledCards);
  }

  function handleRadioShowDescriptionClick() {
    //prettier-ignore
    const updatedCards = 
    [...allcards].map((card) => ({ ...card, showTitle: false}));

    setAllCards(updatedCards);

    setRadioButtonShowTitle(false);
  }

  function handleRadioShowTitleClick() {
    //prettier-ignore
    const updatedCards = 
    [...allcards].map((card) => ({ ...card, showTitle: true}));

    setAllCards(updatedCards);

    setRadioButtonShowTitle(true);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...allcards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;

    setAllCards(updatedCards);
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
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar Título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDiscription"
            name="showInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar Descrição
          </RadioButton>
        </div>

        <FlashCards>
          {allcards.map(({ id, title, description, showTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
                onToggleFlashCard={handleToggleFlashCard}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}

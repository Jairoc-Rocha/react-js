import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";
import Loading from "../components/Loading";
import Error from "../components/Error";

import "./FlashCardsPage.css";
import { apiGetAllFlashCards } from "../services/apiService";
import FlashCardItem from "../components/FlashCardItem";
import FlashCardForm from "../components/FlashCardForm";

export default function FlashCardsPage() {
  // Back End
  const [allcards, setAllCards] = useState([]);

  // Exclusivo para Estudos
  const [studyCards, setStudyCards] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [createMode, setCreateMode] = useState(true);

  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  useEffect(() => {
    // Promisse
    // apiGetAllFlashCards().then((allFlashCards) => {
    //   setAllCards(allFlashCards);
    // });

    // IIFE
    // (async function getAllCards() {
    //   const backEndAllCards = await apiGetAllFlashCards();
    //   setAllCards(backEndAllCards);
    // })();

    // async await
    async function getAllCards() {
      try {
        const backEndAllCards = await apiGetAllFlashCards();
        setAllCards(backEndAllCards);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllCards();
  }, []);

  useEffect(() => {
    setStudyCards(allcards.map((card) => ({ ...card, showTitle: true })));
  }, [allcards]);

  function handleShuffle() {
    const suffledCards = helperShuffleArray(studyCards);

    setStudyCards(suffledCards);
  }

  function handleRadioShowDescriptionClick() {
    //prettier-ignore
    const updatedCards = 
    [...studyCards].map((card) => ({ ...card, showTitle: false}));

    setStudyCards(updatedCards);

    setRadioButtonShowTitle(false);
  }

  function handleRadioShowTitleClick() {
    //prettier-ignore
    const updatedCards = 
    [...studyCards].map((card) => ({ ...card, showTitle: true}));

    setStudyCards(updatedCards);

    setRadioButtonShowTitle(true);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex((card) => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;

    setStudyCards(updatedCards);
  }

  function handleDeleteFlashCard(cardId) {
    setAllCards(allcards.filter((card) => card.id !== cardId));
  }

  function handleEditFlashCard(card) {
    setCreateMode(false);
  }

  let mainJsx = <Loading />;

  if (error) {
    mainJsx = <Error>{error}</Error>;
  }

  if (!loading) {
    mainJsx = (
      <>
        <Tabs>
          <TabList>
            <Tab>Listagem</Tab>
            <Tab>Cadastro</Tab>
            <Tab>Estudos</Tab>
          </TabList>

          <TabPanel>
            {allcards.map((flashCard) => {
              return (
                <FlashCardItem
                  key={flashCard.id}
                  onDelete={handleDeleteFlashCard}
                  onEdit={handleEditFlashCard}
                >
                  {flashCard}
                </FlashCardItem>
              );
            })}
          </TabPanel>

          <TabPanel>
            <FlashCardForm createMode={createMode} />
          </TabPanel>

          <TabPanel>
            <Button onButtonClick={handleShuffle}>Ambaralhar cards</Button>
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
                buttonChecked={!radioButtonShowTitle}
                onButtonClick={handleRadioShowDescriptionClick}
              >
                Mostrar Descrição
              </RadioButton>
            </div>

            <FlashCards>
              {studyCards.map(({ id, title, description, showTitle }) => {
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
          </TabPanel>
        </Tabs>
      </>
    );
  }

  return (
    <>
      <Header>react-flash-cards-v2</Header>

      <Main>{mainJsx}</Main>
    </>
  );
}

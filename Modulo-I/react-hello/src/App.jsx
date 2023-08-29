import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";
import Timer from "./components/Timer";
import CheckBoxInput from "./components/CheckBoxInput";

export default function App() {
  const [name, setName] = useState("Raphael");
  const [birthDate, setBirthDate] = useState("1982-12-22");
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    document.title = name;
  }, [name]);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer((currentShowTimer) => !currentShowTimer);
  }

  return (
    <>
      <Header>react-hello</Header>
      <Main>
        {showTimer && <Timer />}

        <CheckBoxInput
          labelDescription="Mostrar cronômetro"
          onCheckboxChange={toggleShowTimer}
        />
        <TextInput
          id={getNewId()}
          autoFocus
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <DateInput
          id={getNewId()}
          labelDescription="Digite sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres e você possui{" "}
          {getAgeFrom(birthDate)} anos
        </p>
      </Main>
    </>
  );
}

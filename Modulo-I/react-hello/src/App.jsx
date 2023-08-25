import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DataInput";

export default function App() {
  const [name, setName] = useState("Raphael");
  const [birthDate, setBirthDate] = useState("1982-12-22");

  const handleNameChange = (newName) => {
    setName(newName);
  };

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  return (
    <>
      <Header>react-hello</Header>
      <Main>
        <TextInput
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />
        <DateInput
          labelDescription="Digite sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          O seu nome é {name}, com {name.length} caracteres e você possui 41
          anos
        </p>
      </Main>
    </>
  );
}

import { useEffect, useState } from "react";

const url = "http://localhost:3000/products";

import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  // 1 - resgatando dados
  const [products, setProducts] = useState([]);
  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - carregamento dinamico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  // 4 - custom hook
  const { data: items } = useFetch(url);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   getData();
  // }, []);

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* 1 - resgate de dados */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>
      {/* 2 - envio de dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="digite o nome do produto"
              autoComplete="off"
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder="digite o preço do produto"
              autoComplete="off"
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default App;

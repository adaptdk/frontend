import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import sanity from "sanity/sanity-client";
import { Animal } from "sanity/schema";

const getAllAnimals = async () => {
  const response = await sanity.getAll("animal");

  return response;
};

function App() {
  const [animals, setAnimals] = useState<Animal[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const animalsData = await getAllAnimals();

      console.log(animalsData);

      if (animalsData) setAnimals(animalsData);
    };

    fetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

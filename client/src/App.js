import React from "react";
import './App.css';
import PersonCard from "./components/PersonCard.js";

function App() {
  return (
    <div className="App">
      <PersonCard
      lastName = {"Milfort"}
      firstName = {"Lizzie"}
      age={43}
      hairColor={"black"}
      />
      <PersonCard
      lastName = {"Henrice"}
      firstName = {"Sabrina"}
      age={23}
      hairColor={"brown"}
      />
      <PersonCard
      lastName = {"Mendez"}
      firstName = {"Luis"}
      age={27}
      hairColor={"blonde"}
      />
    </div>
  );
}

export default App;


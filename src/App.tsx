import React from "react";
import { Header } from "./components/Header/Header";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";

function App() {
  return (
    <div className="App container">
      <Header />
      <PersonalInfo />
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { MainInfo } from "./Components/MainInfo/MainInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ height: "800px", backgroundColor: "red" }}></div>
      <MainInfo />
      <div style={{ height: "800px", backgroundColor: "red" }}></div>
    </div>
  );
}

export default App;

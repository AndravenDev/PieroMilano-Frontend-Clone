import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { MainInfo } from "./Components/MainInfo/MainInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainInfo />
      <div style={{ height: "800px", backgroundColor: "red" }}></div>
    </div>
  );
}

export default App;

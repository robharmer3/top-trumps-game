import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Deal from "./Components/Deal";

function App() {
  return (
    <>
      <h1>Witty Top Trumps Name</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deal" element={<Deal />} />
      </Routes>
    </>
  );
}

export default App;

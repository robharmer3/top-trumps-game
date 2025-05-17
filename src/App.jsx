import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { AvatarProvider } from "./Context/Avatar";
import { NameProvider } from "./Context/Name";
import { CategoryProvider } from "./Context/Category";
import Home from "./Pages/Home";
import Deal from "./Pages/Deal";

function App() {
  return (
    <AvatarProvider>
      <NameProvider>
        <CategoryProvider>
          <h1>Witty Top Trumps Name</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deal" element={<Deal />} />
          </Routes>
        </CategoryProvider>
      </NameProvider>
    </AvatarProvider>
  );
}

export default App;

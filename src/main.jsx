import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AvatarProvider } from "./Context/Avatar.jsx";
import { NameProvider } from "./Context/Name.jsx";
import { CategoryProvider } from "./Context/Category.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AvatarProvider>
        <NameProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </NameProvider>
      </AvatarProvider>
    </BrowserRouter>
  </StrictMode>
);

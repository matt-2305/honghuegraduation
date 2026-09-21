import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EnterPassword } from "./screens/EnterPassword/EnterPassword";
import { CorrectPassword } from "./screens/CorrectPassword/CorrectPassword";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterPassword />} />
        <Route path="/invitation" element={<CorrectPassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

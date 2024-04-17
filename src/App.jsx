import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./pages/About";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import StartingPage from "./Pages/StartingPage";
import { DetailsProvider } from "./contexts/DetailsContext";
import { useState } from "react";

function App() {
  return (
    <DetailsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="start" element={<StartingPage />} />
        </Routes>
      </BrowserRouter>
    </DetailsProvider>
  );
}

export default App;

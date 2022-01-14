import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage";
import PickPlaylist from "./Component/PickPlaylist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pick-playlist" element={<PickPlaylist />} />
    </Routes>
  );
}

export default App;

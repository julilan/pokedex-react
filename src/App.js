import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import PokeList from "./components/PokeList/PokeList";
import Pokesingle from "./components/Pokesingle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<PokeList />} />
          <Route path="pokedex:pokesingle" element={<Pokesingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

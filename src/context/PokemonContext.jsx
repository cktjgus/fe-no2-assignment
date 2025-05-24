import React, { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selected, setSelected] = useState([]);
  return (
    <PokemonContext.Provider value={{ selected, setSelected }}>
      {children}
    </PokemonContext.Provider>
  );
}

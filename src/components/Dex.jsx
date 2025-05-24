import React from "react";
import Dashboard from "./Dashboard";
import PokemonList from "./PokemonList";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

const DexWrapper = styled.div`
  padding: 32px;
  background: #faebd7;
  min-height: 100vh;
`;

function Dex({ mockData }) {
  const { selected, setSelected } = usePokemon();

  const handleAdd = (pokemon) => {
    if (selected.find(p => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  return (
    <DexWrapper>
      <Dashboard />
      <PokemonList mockData={mockData} onAdd={handleAdd} />
    </DexWrapper>
  );
}

export default Dex;

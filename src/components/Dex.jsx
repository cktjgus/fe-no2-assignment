// src/components/Dex.jsx
import React from "react";
import Dashboard from "./Dashboard";
import PList from "./PokemonList";
import styled from "styled-components";

const DexWrapper = styled.div`
  padding: 32px; background: #faebd7; min-height: 100vh;
`;

function Dex({ mockData, selected, setSelected }) {
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

  const handleRemove = (idx) => {
    setSelected(selected.filter((_, i) => i !== idx));
  };

  React.useEffect(() => {
    console.log("selected 상태 변화:", selected);
  }, [selected]);

  return (
    <DexWrapper>
      <Dashboard selected={selected} onRemove={handleRemove} />
      <PList
        mockData={mockData}
        onAdd={handleAdd}
        selected={selected}
      />
    </DexWrapper>
  );
}


export default Dex;

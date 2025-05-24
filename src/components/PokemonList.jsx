import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
`;

function PokemonList({ mockData, onAdd, selected }) {
  return (
    <ListWrapper>
      {mockData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAdd}
          isSelected={!!selected.find(p => String(p.id) === String(pokemon.id))}
        />
      ))}
    </ListWrapper>
  );
}

export default PokemonList;

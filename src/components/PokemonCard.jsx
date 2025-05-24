import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #ccc2;
  padding: 16px;
  width: 190px;
  height: 220px;
  text-align: center;
  position: relative;
  transition: box-shadow 0.2s;
&:hover { 
  box-shadow: 0 8px 24px #bbb8; 
  cursor: pointer;
  transform: scale(1.1);
  z-index: 2;
}`;

const AddBtn = styled.button`
  background: #b71c1c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 1rem;
  margin-top: 12px;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const Types = styled.div`
  margin-bottom: 6px;
  font-size: 0.98rem;
  color: #757575;
`;

const Name = styled.div`
  font-weight: bold;
  margin: 6px 0;
`;

function PokemonCard({ pokemon, onAdd, isSelected }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} width={72} />
      <Name>{pokemon.korean_name}</Name>
      <Types>{pokemon.types && pokemon.types.join(", ")}</Types>
      <AddBtn
        onClick={e => {
          e.stopPropagation();
          onAdd(pokemon);
        }}
        disabled={isSelected}
      >
        {isSelected ? "선택됨" : "추가"}
      </AddBtn>
    </Card>
  );
}

export default PokemonCard;

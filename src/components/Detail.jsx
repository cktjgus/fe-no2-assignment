import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailWrap = styled.div`
  max-width: 480px;
  margin: 48px auto;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 32px #aaa3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const ActionBtn = styled.button`
  background: #b71c1c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 18px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #ff3b3b;
  }
`;

const Desc = styled.div`
  margin: 16px 0;
  text-align: center;
`;

function Detail({ mockData, selected, setSelected }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = mockData.find(p => String(p.id) === id);

  if (!pokemon) return <DetailWrap>포켓몬을 찾을 수 없습니다.</DetailWrap>;

  const isSelected = !!selected.find(p => String(p.id) === id);

  function handleAdd() {
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  }

  function handleRemove() {
    setSelected(selected.filter(p => String(p.id) !== String(pokemon.id)));
  }

  return (
    <DetailWrap>
      <img src={pokemon.img_url} alt={pokemon.korean_name} width={120} />
      <h2>{pokemon.korean_name}</h2>
      <div>No. {pokemon.id}</div>
      <div>타입: {pokemon.types && pokemon.types.join(", ")}</div>
      <Desc>{pokemon.description}</Desc>
      <BtnRow>
        {isSelected ? (
          <ActionBtn onClick={handleRemove}>삭제</ActionBtn>
        ) : (
          <ActionBtn onClick={handleAdd}>추가</ActionBtn>
        )}
        <ActionBtn onClick={() => navigate(-1)}>뒤로 가기</ActionBtn>
      </BtnRow>
    </DetailWrap>
  );
}

export default Detail;

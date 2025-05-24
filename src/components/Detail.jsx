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

const BackBtn = styled.button`
  margin-top: 24px;
  background: #b71c1c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 1rem;
  cursor: pointer;
`;

const Desc = styled.div`
  margin: 16px 0;
  text-align: center;
`;

function Detail({ mockData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = mockData.find(p => String(p.id) === id);

  if (!pokemon) return <DetailWrap>포켓몬을 찾을 수 없습니다.</DetailWrap>;

  return (
    <DetailWrap>
      <img src={pokemon.img_url} alt={pokemon.korean_name} width={120} />
      <h2>{pokemon.korean_name}</h2>
      <div>No. {pokemon.id}</div>
      <div>타입: {pokemon.types && pokemon.types.join(", ")}</div>
      <Desc>{pokemon.description}</Desc>
      <BackBtn onClick={() => navigate(-1)}>뒤로 가기</BackBtn>
    </DetailWrap>
  );
}

export default Detail;
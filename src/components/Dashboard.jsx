import React from "react";
import styled from "styled-components";
import pokeballImg from "../assets/pokeball.png";

const Dash = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Slot = styled.div`
  width: 190px;
  height: 220px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 2px 12px #ccc3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 0 0 0;
  position: relative;
`;

const PokeballWrap = styled.div`
  width: 190px;
  height: 220px;
  border-radius: 16px;
  border: 2px dashed #d4b28c;
  background: #faf7ee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokeballImg = styled.img`
  width: 64px;
  opacity: 1;
`;

const PokemonImg = styled.img`
  width: 72px;
`;

const Name = styled.div`
  font-weight: bold;
  margin: 14px 0 4px 0;
  font-size: 1.08rem;
`;

const Number = styled.div`
  color: #757575;
  margin-bottom: 20px;
`;

const RemoveBtn = styled.button`
background: #b71c1c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 1rem;
  margin-top: 12px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 18px;
  &:hover {
    background: #ff3b3b;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: #e53935;
  margin-bottom: 12px;
  margin-left: 6px;
`;

function Dashboard({ selected, onRemove }) {
  return (
    <div>
      <Dash>
        <Title>나만의 포켓몬</Title>
        {Array(6)
          .fill(null)
          .map((_, idx) =>
            selected[idx] ? (
              <Slot key={`slot-${idx}`}>
                <PokemonImg src={selected[idx].img_url} alt={selected[idx].korean_name} />
                <Name>{selected[idx].korean_name}</Name>
                <Number>No. {String(selected[idx].id).padStart(3, "0")}</Number>
                <RemoveBtn onClick={() => onRemove(idx)}>삭제</RemoveBtn>
              </Slot>
            ) : (
              <PokeballWrap key={`slot-${idx}`}>
                <PokeballImg src={pokeballImg} alt="empty" />
              </PokeballWrap>
            )
          )}
      </Dash>
    </div>
  );
}


export default Dashboard;

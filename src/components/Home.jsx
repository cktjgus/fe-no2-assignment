import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../assets/pokemon.svg";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 500px;
  margin-bottom: 48px;
`;

const StartBtn = styled.button`
  background: #b71c1c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 40px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <Logo src={logoImg} alt="Pokemon" />
      <StartBtn onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartBtn>
    </HomeContainer>
  );
}
export default Home;

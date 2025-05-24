import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import Dex from "./components/Dex";
import Detail from "./components/Detail";
import mockData from "./mock"; 

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f8e7c5;
    font-family: 'Noto Sans KR', 'Pretendard', sans-serif;
  }
  * {
    box-sizing: inherit;
  }
`;

function App() {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dex"
            element={
              <Dex
                mockData={mockData}
                selected={selected}
                setSelected={setSelected}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail mockData={mockData} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

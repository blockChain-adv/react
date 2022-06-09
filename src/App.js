import React from "react";
import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdvertiserPage from "./pages/AdvertiserPage";
import MyPage from "./pages/MyPage";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(215, 194, 242, 0.3);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<AdvertiserPage />} path="/Advertiser" />
        <Route element={<MyPage />} path="/MyPage" />
      </Routes>
    </>
  );
}

export default App;

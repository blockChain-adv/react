import React from "react";
import styled from "styled-components";
import Header from "../components/headers/Header";

const Re = styled.div`
  /* Rectangle 1 */

  // position: absolute;
  margin: 10px;
  align-items: center;

  background: #f9dff4;
  border-radius: 50px 50px;
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <Re>
        <div>블록 생성중...</div>
      </Re>
    </>
  );
};

export default MainPage;

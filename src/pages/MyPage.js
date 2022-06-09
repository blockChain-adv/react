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

const MyPage = () => {
  return (
    <div>
      <Header />
      <Re>
        <div>내 계정정보 불러오기...중..</div>
      </Re>
    </div>
  );
};

export default MyPage;

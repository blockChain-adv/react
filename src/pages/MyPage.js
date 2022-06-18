import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/headers/Header";
import Web3 from "web3";

const Re = styled.div`
  /* Rectangle 1 */

  // position: absolute;
  margin: 10px;
  align-items: center;

  background: #f9dff4;
  border-radius: 50px 50px;
`;

const MyPage = () => {
  const providerUrl = process.env.PROVIDER_URL || "http://localhost:8545";

  const provid = useEffect(() => {
    let provider = window.ethereum; // metamask가 실제로 설치되어 있는지 확인

    if (typeof provider !== "undefined") {
      // 1. metamask is installed

      // 2. 사용자 지갑 연결 요청
      provider
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          console.log(accounts);
        })
        .catch((err) => {
          console.log(err);
        });
      // 메타마스크 계정 변경 사항을 수신
      window.ethereum.on("accountsChanged", function (accounts) {
        console.log(accounts);
      });
    }

    // web3 인스턴스를 사용해 통화 트랜잭션 수행
    const web3 = new Web3(providerUrl);
  }, []);

  return (
    <div>
      <Header />
      <Re>
        <div></div>
      </Re>
    </div>
  );
};

export default MyPage;

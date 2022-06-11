import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/headers/Header";
import Plus from "../components/headers/images/plusbutton.png";
import Modal from "react-modal";
import Web3 from "web3";

const Re = styled.div`
  /* Rectangle 1 */

  // position: absolute;
  margin: 10px;
  align-items: center;

  background: #f9dff4;
  border-radius: 50px 50px;
`;

const Line = styled.div`
  margin: 10px;
  float: none;
  text-align: left;
  padding: 20px;
  font-size: 40px;
  line-height: 47px;
`;

const Adblock = styled.div`
  .container {
    display: grid;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    grid-template-rows: repeat(2, 300px);
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 300px;
    grid-auto-columns: 1fr;
  }
  .item {
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #f9f2f2;
  }
  .item_1 {
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    background-color: rgba(249, 242, 242, 0.5);
    border: 1px dashed #000000;
  }
  .plus {
    padding: auto;
    text-align: center;
    margin: 10px;
  }
  .adplus {
    margin: 10px;
    font-size: medium;
  }
`;

/* web3 연결
const WEB3 = () => {
  const providerUrl = process.env.PROVIDER_URL || "http://localhost:8545";

  useEffect(() => {
    const web3 = new Web3(providerUrl);
  }, []);
  return (
    <>
      <div>연습중</div>
    </>
  );
};
*/

const AdvertiserPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <Header />
      <Re>
        <Line>
          <b>등록한 광고</b>
        </Line>
        <Adblock>
          <div className="container">
            <div className="item_1">
              <div className="plus">
                <img
                  width={200}
                  margin={20}
                  border-radius={50}
                  src={Plus}
                  alt="광고 등록"
                  onClick={() => {
                    setModalIsOpen(true);
                  }}
                />
                <Modal
                  style={{
                    content: {
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItem: "center",
                      textAlign: "center",
                      // 화면 중앙 위치시키기
                      width: "500px",
                      height: "500px",
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                  }}
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                >
                  <form>
                    <p>
                      광고 제목: <input name="title" />
                    </p>

                    <p>
                      광고자: <input name="advertiser" />
                    </p>

                    <p>
                      클릭 수: <input name="click_count" />
                    </p>
                    <p>
                      광고비: <input name="advcost" />
                    </p>
                    <p>
                      광고내용: <input name="content" />
                    </p>
                  </form>
                  <button onClick={() => setModalIsOpen(false)}>
                    광고등록
                  </button>
                </Modal>
                <div className="adplus">광고 등록</div>
              </div>
            </div>
            <div className="item">HEllo2</div>
            <div className="item">HEllo3</div>
            <div className="item">HEllo4</div>
            <div className="item">HEllo5</div>
            <div className="item">HEllo6</div>
            <div className="item">HEllo7</div>
            <div className="item">HEllo8</div>
            <div className="item">HEllo39</div>
          </div>
        </Adblock>
      </Re>
    </div>
  );
};

export default AdvertiserPage;

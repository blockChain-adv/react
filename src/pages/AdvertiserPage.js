import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/headers/Header";
import Plus from "../components/headers/images/plusbutton.png";
import Modal from "react-modal";
import Web3 from "web3";
// import axios from "axios";

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
  .content {
    margin: 30px;
    padding: 10px;
  }
`;

const Ybox = styled.div`
  padding: 10px;
  margin: 10px;
  font-weight: 900;
  background-color: #eef691;
  width: 135px;
  height: 30px;
  border-radius: 50px;
  border: 0px;
  text-align: center;
`;

/* web3 연결
const WEB3 = () => {
  const providerUrl = process.env.PROVIDER_URL || "http://localhost:8545";

  useEffect(() => {
    const web3 = new Web3(providerUrl);

    let provider = window.ethereum; // metamask가 실제로 설치되어 있는지 확인

    if (typeof provider !== "undefined") {
      // 1. metamask is installed

      // 2. 사용자 지갑 연결 요청
      provider
        .reqest({ method: "eth_requestAccounts" })
        .then((accounts) => {
          console.log(accounts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <div>연습중</div>
    </>
  );
};
*/
/* form data post */
const Post = () => {
  const [title, setTitle] = useState("");
  const [clickCount, setClick] = useState("");
  const [cost, setCost] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setClick(e.target.value);
  };

  const costHandler = (e) => {
    e.preventDefault();
    setCost(e.target.value);
  };

  const contentHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(clickCount);
    console.log(cost);
    console.log(content);

    let body = {
      title: title,
      clickCount: clickCount,
      cost: cost,
      content: content,
    };

    // axios.post("", body).then((res) => console.log(res));
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        광고 제목: <input name="title" onChange={titleHandler} />
      </p>

      <p>
        광고자: <input name="advertiser" />
      </p>

      <p>
        클릭 수: <input name="click_count" onChange={clickHandler} />
      </p>
      <p>
        광고비: <input name="advcost" onChange={costHandler} />
      </p>
      <p>
        광고내용: <input name="content" onChange={contentHandler} />
      </p>
      <button type="submit" onChange={submitHandler}>
        광고등록
      </button>
    </form>
  );
};

/** 모달 오류
 * Warning: react-modal: App element is not defined.
 * Please use `Modal.setAppElement(el)` or set `appElement={el}`.
 * but you can opt-out by setting `ariaHideApp={false}`
 * appElement가 숨겨져야 하는지 ariaHideApp 설정 오류
 * => ariaHideApp = false로 설정
 * */

const AdvertiserPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const providerUrl = process.env.PROVIDER_URL || "http://localhost:8545";

  useEffect(() => {
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
                  ariaHideApp={false}
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
                  <button onClick={() => setModalIsOpen(false)}>닫기</button>
                  <Post></Post>
                </Modal>
                <div className="adplus">광고 등록</div>
              </div>
            </div>
            <div className="item">
              <Ybox>CocaCola</Ybox>
              <div className="content">
                <div>거래내역: </div>
                <div>광고내용: </div>
                <div>클릭 수: 100</div>
              </div>
              <Ybox>
                <div className="small">광고중</div>
              </Ybox>
            </div>
          </div>
        </Adblock>
      </Re>
    </div>
  );
};

export default AdvertiserPage;

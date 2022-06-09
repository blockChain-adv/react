import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
// import Button from "../common/Button";
import { Link } from "react-router-dom";
import LogoImg from "./images/logo.png";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/*
  Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
*/

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  a,
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
  .logo {
    // font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    justify-self: start;
  }
  .right {
    display: flex;
  }
  .header_right {
    list-style: none;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: end;
    margin-right: 2rem;
    & > li {
      margin-left: 20px;
      font-size: 20px;
    }
  }
`;

/*
  헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트 
 */
const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            광클
            <img height={25} width={25} src={LogoImg} alt="logo" />
          </Link>

          <div className="right">
            <ul className="header_right">
              <li>
                <Link to="/Advertiser">광고자</Link>
              </li>
              <li>
                <Link to="/MyPage">마이페이지</Link>
              </li>
              {/* 로그인시 로그아웃으로 변경해야함 */}
              <li>
                로그아웃
                {/*
                버튼또는 onClick으로 변경하고 클릭시 로그아웃으로 변경
                <Link to="/logout">로그아웃</Link>
                */}
              </li>
            </ul>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;

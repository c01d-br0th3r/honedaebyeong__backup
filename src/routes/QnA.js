import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./QnA.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  /*background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 1%,
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1494236581341-7d38b2e7d824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1888&q=80");*/
  background-position: center;
  background-size: cover;
`;

const TitleWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Explain = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Accordion = styled.div`
  width: 100%;
  padding: 0 40px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const SLink = styled(Link)`
  color: #cd6133;
`;

const QnA = () => {
  const handleClick = (event) => {
    if (!event.target.classList.contains("accordian-toggle")) return;
    let content = document.querySelector(event.target.hash);
    if (!content) return;
    event.preventDefault();
    if (content.classList.contains("active")) {
      content.classList.remove("active");
      return;
    }
    let accordians = document.querySelectorAll(".accordian-content.active");
    for (let i = 0; i < accordians.length; i++) {
      accordians[i].classList.remove("active");
    }
    content.classList.add("active");
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <TitleWrapper>
          <Title>홍대병 FAQ</Title>
          <Explain>자주 묻는 질문을 모았습니다.</Explain>
          <Explain>
            추가적으로 궁금하신 부분은 홍대병 오픈카톡으로 문의해주세요.
          </Explain>
        </TitleWrapper>
        <Accordion>
          <div className="accordian-wrapper">
            <a href="#content-1" className="accordian-toggle">
              홍대병은 어떤 사이트인가요?
            </a>
            <div className="accordian-content" id="content-1">
              홍대병은 SNS 연계 의류 홍보 사이트입니다.
              <br />
              개성을 강조하는 시대에서, 패션은 그 어떤 것보다 자신을 잘
              나타냅니다.
              <br />
              우리는 이러한 트렌드를 따라가 자신만의 개성이 담긴 옷을 다른
              사람들에게 알려줍니다.
              <br />전 세계의 쇼핑몰들을 둘러보고 마음에 드는 옷을 구매해보세요!
            </div>
          </div>
          <div className="accordian-wrapper">
            <a href="#content-2" className="accordian-toggle">
              질문 2
            </a>
            <div className="accordian-content" id="content-2">
              답변 2
            </div>
          </div>
          <div className="accordian-wrapper">
            <a href="#content-3" className="accordian-toggle">
              질문 3
            </a>
            <div className="accordian-content" id="content-3">
              답변 3
            </div>
          </div>
          <div className="accordian-wrapper">
            <a href="#content-4" className="accordian-toggle">
              질문 4
            </a>
            <div className="accordian-content" id="content-4">
              답변 4
            </div>
          </div>
          <div className="accordian-wrapper">
            <a href="#content-5" className="accordian-toggle">
              질문 5
            </a>
            <div className="accordian-content" id="content-5">
              답변 5
            </div>
          </div>
        </Accordion>
        <TitleWrapper>
          <Title>Contact US</Title>
          <Explain>
            자세한 내용을 보려면 <SLink to="/contact">여기</SLink>를 클릭하세요.
          </Explain>
        </TitleWrapper>
      </Container>
    </>
  );
};

export default QnA;

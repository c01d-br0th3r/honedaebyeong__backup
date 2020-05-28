import React, { useState, useEffect } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import styled from "styled-components";
import PersonalInfo from "../components/PersonalInfo";
import axios from "axios";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 1%,
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1494236581341-7d38b2e7d824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1888&q=80");
  background-position: center;
  background-size: cover;
`;

const SHeader = styled.div`
  font-family: "Song Myung", serif;
  margin-bottom: 30px;
  padding: 5px 10px;
  border-bottom: 3px solid #fdcb6e;
  align-self: flex-start;
  font-size: 32px;
`;

const SAccordion = styled(Accordion)`
  font-family: "Song Myung", serif !important;
  margin-bottom: 50px;
`;
const SAccordionTitle = styled(Accordion.Title)`
  &&& {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Song Myung", serif !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Para = styled.p`
  font-size: 16px;
  line-height: 30px;
`;

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState({ loading: true, data: [] });

  const handleData = async () => {
    const res = await axios.get("http://18.221.250.120/api/post");
    console.log(res);
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleClick = (event, titleProps) => {
    const index = titleProps.index;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Header />
      <Container>
        <SHeader>자주 묻는 질문</SHeader>
        <SAccordion fluid styled>
          <SAccordionTitle
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            <div>홍대병은 어떤 사이트인가요?</div>
          </SAccordionTitle>
          <Accordion.Content active={activeIndex === 0}>
            <Para>
              홍대병은 SNS연계 의류 홍보 사이트입니다.
              <br />
              <br />
              홍대병은 사용자 여러분에게 SNS에서 작성된 의류 관련 게시물 정보를
              보다 쉽고 빠르게 정보 제공을 하기위해
              <br />
              그리고 홍보를 하고싶은 사용자 분들에게 홍보를 대행해주기 위해
              제작됐습니다
            </Para>
          </Accordion.Content>

          <SAccordionTitle
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            <div>회원가입은 어떻게 하나요?</div>
          </SAccordionTitle>
          <Accordion.Content active={activeIndex === 1}>
            <p>알아요.</p>
          </Accordion.Content>

          <SAccordionTitle
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            <div>좋아요 누른 옷들을 보고 싶어요!</div>
          </SAccordionTitle>
          <Accordion.Content active={activeIndex === 2}>
            <p>준</p>
            <p>식</p>
          </Accordion.Content>
        </SAccordion>
        <SHeader>Contact</SHeader>
        <ProfileContainer>
          <PersonalInfo
            name="이찬형"
            email="lchyung1998@gmail.com"
            blog="velog.io/@lchyung1998"
            github="github.com/c01d-br0th3r"
          />
          <PersonalInfo
            name="이찬형"
            email="lchyung1998@gmail.com"
            blog="velog.io/@lchyung1998"
            github="github.com/c01d-br0th3r"
          />
          <PersonalInfo
            name="이찬형"
            email="lchyung1998@gmail.com"
            blog="velog.io/@lchyung1998"
            github="github.com/c01d-br0th3r"
          />
          <PersonalInfo
            name="이찬형"
            email="lchyung1998@gmail.com"
            blog="velog.io/@lchyung1998"
            github="github.com/c01d-br0th3r"
          />
        </ProfileContainer>
      </Container>
    </>
  );
};

export default QnA;

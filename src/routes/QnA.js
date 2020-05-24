import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import styled from "styled-components";
import PersonalInfo from "../components/PersonalInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 1%,
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1494236581341-7d38b2e7d824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1888&q=80");
  background-position: center;
  background-size: cover;
`;

const Header = styled.div`
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

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (event, titleProps) => {
    const index = titleProps.index;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  return (
    <Container>
      <Header>자주 묻는 질문</Header>
      <SAccordion fluid styled>
        <SAccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          <div>좋아요 누른 옷들을 보고 싶어요!</div>
        </SAccordionTitle>
        <Accordion.Content active={activeIndex === 0}>
          <p>프로필 가서 보세요.</p>
        </Accordion.Content>

        <SAccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          <div>개발자들이 너무 멋잇어요!</div>
        </SAccordionTitle>
        <Accordion.Content active={activeIndex === 1}>
          <p>알아요.</p>
        </Accordion.Content>

        <SAccordionTitle
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />엄
        </SAccordionTitle>
        <Accordion.Content active={activeIndex === 2}>
          <p>준</p>
          <p>식</p>
        </Accordion.Content>
      </SAccordion>
      <Header>Contact</Header>
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
  );
};

export default QnA;

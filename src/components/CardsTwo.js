import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: inline-block;
  position: relative;
  background-color: white;
  font-family: "Song Myung", serif;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin-bottom: 10px;
`;

const Bg = styled.div`
  opacity: 0;
  position: absolute;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:hover {
    background-color: rgba(12, 12, 12, 0.7);
    color: white;
    opacity: 1;
  }
  transition: all 0.1s linear;
  padding: 20px;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 100%;
`;

const BgTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const BgDesc = styled.div`
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.4;
  opacity: 1 !important;
`;

const Desc = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.4;
`;

const Star = styled.span`
  color: #fdcb6e;
`;

const CardsTwo = ({ img, title, score, desc }) => {
  return (
    <Container>
      <Bg>
        <BgTitle>{title}</BgTitle>
        <BgDesc>{desc}</BgDesc>
      </Bg>
      <Img src={img} />
      <Info>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Info>
    </Container>
  );
};

export default CardsTwo;

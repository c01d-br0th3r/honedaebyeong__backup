import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121212;
  color: white;
`;

const Img = styled.div`
  width: 100%;
  height: 900px;
  background: linear-gradient(
      to bottom,
      rgba(18, 18, 18, 0.3),
      rgba(18, 18, 18, 1)
    ),
    url("https://i0.wp.com/vegandarak.com/wp-content/uploads/2019/06/IMG_7548-%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg?w=2280&ssl=1");
  background-position: center;
  background-size: cover;
  position: relative;
  margin-bottom: 20px;
`;

const ImgTitle = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: 60px;
  color: #c2c2c2;
  position: absolute;
  bottom: 100px;
  left: 80px;
`;

const Freedom = styled.div`
  position: relative;
  left: 10px;
  width: 270px;
  //border-bottom: 4px solid #cd6133;
`;

const Hong = styled.div`
  font-size: 120px;
  color: white;
  letter-spacing: 7px;
  font-family: "Gorditas", cursive;
  background-color: rgba(210, 210, 210, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  &:hover {
    font-size: 130px;
    color: #cd6133;
  }
  transition: all 0.3s ease-in-out;
`;

const InfoWrapper = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  padding-bottom: 50px;
`;

const PersonImg = styled.img`
  width: 200px;
  border-radius: 100px;
  margin-right: 100px;
`;
const PersonInfo = styled.div`
  font-family: "Nanum Gothic Coding", monospace;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Name = styled.div`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Mail = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
  opacity: 0.7;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  opacity: 0.8;
  font-size: 18px;
`;

const Dev = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Contact = () => {
  return (
    <Container>
      <Img>
        <ImgTitle>
          <Freedom>Freedom,</Freedom>
          <Hong>HONGDAE</Hong>
        </ImgTitle>
      </Img>
      <InfoWrapper>
        <PersonImg src="https://avatars0.githubusercontent.com/u/60615552?s=400&u=114d0e327877aa44205355648274e5e2884edd9e&v=4" />
        <PersonInfo>
          <Name>이찬형</Name>
          <Mail>lchyung1998@gmail.com</Mail>
          <Dev>FrontEnd Developer</Dev>
          <Desc>웹 페이지를 만듭니다. 꾸밉니다.</Desc>
        </PersonInfo>
      </InfoWrapper>
    </Container>
  );
};

export default Contact;

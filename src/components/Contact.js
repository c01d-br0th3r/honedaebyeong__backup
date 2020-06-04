import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background-color: #121212;
  color: white;
  padding-bottom: 100px;
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
    color: #cd6133;
  }
  transition: all 0.3s ease-in-out;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  margin-right: 50px;
  padding: 30px 50px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-right: 50px;
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
  letter-spacing: 3px;
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
          <Link to="/main">
            <Hong>HONGDAE</Hong>
          </Link>
        </ImgTitle>
      </Img>
      <InfoContainer>
        <div>
          <InfoWrapper>
            <PersonImg src="https://avatars0.githubusercontent.com/u/60615552?s=400&u=114d0e327877aa44205355648274e5e2884edd9e&v=4" />
            <PersonInfo>
              <Name>이찬형</Name>
              <Mail>이찬형@gmail.com</Mail>
              <Dev>FrontEnd Developer</Dev>
              <Desc>웹 페이지를 만듭니다. 꾸밉니다.</Desc>
            </PersonInfo>
          </InfoWrapper>
          <InfoWrapper>
            <PersonImg src="https://avatars3.githubusercontent.com/u/60103324?s=400&u=94256beb4a869cb7cf811e01fb1258cf495e22c8&v=4" />
            <PersonInfo>
              <Name>차재윤</Name>
              <Mail>차재윤@gmail.com</Mail>
              <Dev>BackEnd Developer</Dev>
              <Desc>서버를 만듭니다. 잘 만듭니다.</Desc>
            </PersonInfo>
          </InfoWrapper>
        </div>
        <div>
          <InfoWrapper>
            <PersonImg src="https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png" />
            <PersonInfo>
              <Name>박별</Name>
              <Mail>박별@starportion.com</Mail>
              <Dev>FrontEnd Developer</Dev>
              <Desc>스타포션을 만듭니다.</Desc>
            </PersonInfo>
          </InfoWrapper>
          <InfoWrapper>
            <PersonImg src="https://pluspng.com/img-png/user-png-icon-male-user-icon-512.png" />
            <PersonInfo>
              <Name>박태순</Name>
              <Mail>박태순@ensharp.com</Mail>
              <Dev>BackEnd Developer</Dev>
              <Desc>대전에 삽니다. KTX를 탑니다.</Desc>
            </PersonInfo>
          </InfoWrapper>
        </div>
      </InfoContainer>
    </Container>
  );
};

export default Contact;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nanum Gothic", sans-serif;
`;

const Profile = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 50px 0;
  padding-bottom: 20px;
  position: relative;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1534162169564-158041fc3992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80");
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border: 3px solid white;
  border-radius: 50px;
  margin-bottom: 20px;
  z-index: 2;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  z-index: 2;
  color: white;
`;

const School = styled.div`
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 15px;
  z-index: 2;
  color: white;
  font-weight: 600;
`;

const Mail = styled.div`
  margin-left: 90px;
  width: 300px;
  height: 30px;
  font-size: 12px;
  z-index: 2;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  i {
    font-size: 14px;
    margin-right: 10px;
  }
  div {
    padding: 0 5px;
  }
`;

const Stack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 15px;
  padding-bottom: 20px;
  position: relative;
  z-index: 2;
`;

const StackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Bar = styled.div`
  width: 100px;
  height: 2px;
  background-color: #f2f2f2;
`;

const Text = styled.span`
  font-size: 18px;
  color: #f2f2f2;
  font-weight: 600;
  letter-spacing: 5px;
  margin: 0 10px;
`;

const StackList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  padding-bottom: 10px;
`;

const ReactIcon = styled.img`
  width: 60px;
  height: 60px;
  border: 3px solid #fff;
  border-radius: 40px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const ReduxIcon = styled.img`
  width: 60px;
  height: 60px;
  border: 3px solid #fff;
  border-radius: 40px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
const SCSSIcon = styled.img`
  width: 60px;
  height: 60px;
  border: 3px solid #fff;
  border-radius: 40px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
const GitIcon = styled.img`
  width: 60px;
  height: 60px;
  border: 3px solid #fff;
  border-radius: 40px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #f2f2f2;
`;

const PersonalInfo = ({ name, email, blog, github }) => {
  return (
    <Container>
      <Profile>
        <Bg />
        <Info>
          <UserImage src="https://image.flaticon.com/icons/svg/483/483361.svg"></UserImage>
          <Name>{name}</Name>
          <School>세종대학교 컴퓨터공학과</School>
          <Mail>
            <i className="xi-mail-o"></i>
            <div>{email}</div>
          </Mail>
          <Mail>
            <i className="xi-home-o"></i>
            <div>{blog}</div>
          </Mail>
          <Mail>
            <i className="xi-github"></i>
            <div>{github}</div>
          </Mail>
        </Info>
        <Stack>
          <StackContainer>
            <Bar />
            <Text>STACK</Text>
            <Bar />
          </StackContainer>
          <StackList>
            <ReactIcon src="https://nomad-coders-assets.s3.amazonaws.com/media/public/badges/React.png"></ReactIcon>
            <ReduxIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXsMu8jVhe6z9QOr_uN8VXovOBQ_FsU3T0YPxxzM0mfatKKDNq&usqp=CAU"></ReduxIcon>
            <SCSSIcon src="https://w0.pngwave.com/png/437/300/sass-npm-cascading-style-sheets-node-js-sass-png-clip-art-thumbnail.png"></SCSSIcon>
            <GitIcon src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"></GitIcon>
          </StackList>
        </Stack>
      </Profile>
    </Container>
  );
};

export default PersonalInfo;

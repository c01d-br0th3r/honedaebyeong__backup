import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../images/LogoImage.png";
import "./header.css";
import { Modal, Button, Visibility } from "semantic-ui-react";
import axios from "axios";

const InputSapn = styled.span`
  // needs to be relative so the :focus span is positioned correctly
  position: relative;

  // bigger font size for demo purposes
  font-size: 1.5em;

  // the border gradient
  background: #dddddd;

  // the width of the input border
  padding: 3px;

  // we want inline fields by default
  display: inline-block;

  // we want rounded corners no matter the size of the field
  border-radius: 9999em;
  // style of the actual input field
  *:not(span) {
    position: relative;
    display: inherit;
    border-radius: inherit;
    margin: 0;
    border: none;
    outline: none;
    padding: 0 0.325em;
    z-index: 1; // needs to be above the :focus span
    // summon fancy shadow styles when focussed
    &:focus + span {
      opacity: 1;
      transform: scale(1);
      width: 100%;
    }
  }

  // we don't animate box-shadow directly as that can't be done on the GPU, only animate opacity and transform for high performance animations.
  span {
    width: 10%;
    transition: all 0.3s;
    opacity: 0; // is hidden by default

    position: absolute;
    z-index: 0; // needs to be below the field (would block input otherwise)
    margin: 0px; // a bit bigger than .input padding, this prevents background color pixels shining through
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    pointer-events: none; // this allows the user to click through this element, as the shadow is rather wide it might overlap with other fields and we don't want to block those.

    // fancy shadow styles
    /* box-shadow: inset 0 0 0 3px #fff,
         0 0 0 4px #fff,
         3px -3px 30px #FFB51E, 
            -3px 3px 30px #FE8800; */
    background: linear-gradient(
      to right,
      rgba(255, 181, 30, 0.3),
      rgba(255, 181, 30, 1)
    );
  }
`;
const InputInput = styled.input`
  font-family: inherit;
  line-height: inherit;
  color: #2e3750;
  min-width: 300px;
`;

const Fixedheader = styled.div`
  font-family: "Song Myung", serif;
  width: 100%;
  background-color: white;
  height: 55px;
  position: fixed;
  left: 0;
  top: ${(props) => {
    return props.status ? "0" : "-60px";
  }};
  z-index: 9999;
  transition: all 0.25s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  font-family: "Song Myung", serif;
`;

const SLink = styled(Link)`
  width: 240px;
  height: 59px;
  background: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;

const Logo = styled.div`
  width: 240px;
  height: 59px;
  background: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const Menu = styled.div`
  height: 35px;
  font-size: 20px;
  padding: 7px 10px 10px 10px;
  &:nth-child(1) {
    margin-right: 100px;
  }
  &:hover {
    border-bottom: 3px solid #fdcb6e;
  }
  transition: all 0.1s linear;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin-right: 10px;
  }
  i {
    padding-right: 10px;
  }
`;

const Input = styled.input`
  font-family: "Song Myung", serif;
  padding: 10px;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to right, #ffeaa7 0%, #fdcb6e 100%);
  border-image-slice: 1;
  border-radius: 7px;
  border-radius: 10px;
  width: 450px;
  &:focus {
    outline: none;
  }
  transition: all 0.2s linear;
  &:nth-child(1) {
    margin-bottom: 20px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [calculations, setCalcul] = useState({
    topPassed: false,
    bottomPassed: false,
    topVisible: false,
    bottomVisible: false,
  });

  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handlePwChange = (event) => {
    setPw(event.target.value);
  };
  const handleUpdate = (e, { calculations }) => {
    setCalcul(calculations);
  };

  const handleSubmit = async () => {
    console.log(id, pw);
    const info = { email: id, password: pw };
    const {
      data: { tokens },
    } = await axios.post("http://192.168.0.20:3030/auth/login", info);
    console.log(tokens);
    window.localStorage.setItem("access_token", tokens.access.token);
  };
  return (
    <>
      <Visibility offset={[10, 10]} onUpdate={handleUpdate}>
        <Container>
          <SLink to="/">
            <Logo path={LogoImage} />
          </SLink>
          <Content>
            <MenuContainer>
              <Menu>메뉴 1</Menu>
              <Menu>메뉴 2</Menu>
            </MenuContainer>
            <InputContainer>
              <div>
                <input
                  className="inputBox"
                  type="text"
                  placeholder="검색어를 입력하세용"
                />
                <div className="inputBar"></div>
              </div>
            </InputContainer>
            <MenuContainer>
              <Link to="/qna">
                <Menu>QnA</Menu>
              </Link>
              <Menu onClick={() => setOpen(true)}>User</Menu>
            </MenuContainer>
          </Content>
        </Container>
      </Visibility>
      <Fixedheader status={calculations.bottomPassed}>
        <Content>
          <MenuContainer>
            <Menu>메뉴 1</Menu>
            <Menu>메뉴 2</Menu>
          </MenuContainer>
          <InputContainer>
            <div>
              <InputSapn>
                <InputInput />
                <span></span>
              </InputSapn>
            </div>
          </InputContainer>
          <MenuContainer>
            <Menu>QnA</Menu>
            <Menu onClick={() => setOpen(true)}>User</Menu>
          </MenuContainer>
        </Content>
      </Fixedheader>
      <Modal
        size="tiny"
        dimmer="blurring"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>로그인</Modal.Header>
        <Modal.Content>
          <FormContainer>
            <Input type="text" placeholder="ID" onChange={handleIdChange} />
            <Input
              type="password"
              placeholder="Password"
              onChange={handlePwChange}
            />
          </FormContainer>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setOpen(false)}>
            No
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yes"
            onClick={handleSubmit}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
});

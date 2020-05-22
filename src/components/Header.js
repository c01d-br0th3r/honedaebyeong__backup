import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../images/LogoImage.png";
import "./header.css";
import { Modal, Visibility } from "semantic-ui-react";
import axios from "axios";
import LoginModal from "../components/LoginModal";
import allActions from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Fixedheader = styled.div`
  font-family: "Song Myung", serif;
  width: 100%;
  background-color: white;
  height: 60px;
  position: fixed;
  left: 0;
  top: ${(props) => (props.status ? "0" : "-60px")};
  z-index: 9999;
  transition: all 0.25s;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  z-index: 10;
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
  border-bottom: 3px solid
    ${(props) => (props.status ? "#fdcb6e" : "transparent")};
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
  border-bottom: 3px solid rgba(255, 234, 167, 0.7);
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

const STLink = styled(Link)``;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => {
  //const [open, setOpen] = useState(false);
  const open = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
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
      <Visibility onUpdate={handleUpdate}>
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
              <STLink to="/about">
                <Menu status={pathname === "/about"}>About</Menu>
              </STLink>
              <Menu onClick={() => dispatch(allActions.openModal())}>User</Menu>
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
              <input
                className="inputBox"
                type="text"
                placeholder="검색어를 입력하세용"
              />
              <div className="inputBar"></div>
            </div>
          </InputContainer>
          <MenuContainer>
            <STLink to="/about">
              <Menu status={pathname === "/about"}>About</Menu>
            </STLink>
            <Menu onClick={() => dispatch(allActions.openModal())}>User</Menu>
          </MenuContainer>
        </Content>
      </Fixedheader>
      <Modal
        size="mini"
        dimmer="blurring"
        open={open}
        onClose={() => dispatch(allActions.closeModal())}
      >
        <LoginModal />
      </Modal>
    </>
  );
});

import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../images/LogoImage.png";
import "./header.css";
import { Modal, Visibility } from "semantic-ui-react";
import axios from "axios";
import LoginModal from "../components/LoginModal";
import allActions from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import UserDropdown from "./UserDropdown";

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
  width: 70px;
  height: 35px;
  font-size: 20px;
  padding: 7px 10px 10px 10px;
  &:nth-child(1) {
    margin-right: 100px;
  }
  &:hover {
    border-bottom: 3px solid #fdcb6e;
  }
  transition: all 0.2s linear;
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

const SVisibility = styled(Visibility)`
  width: 100%;
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
  const loginInfo = useSelector((state) => state.loginInfo);

  const handleIsUser = async () => {
    const userId = window.localStorage.getItem("id");
    const access = window.localStorage.getItem("access_token");
    if (userId !== null) {
      const {
        data: { user },
      } = await axios.get(`http://www.hongsick.com/api/auth/me/${userId}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      dispatch(allActions.loginActions.loginUserSuccess(user));
    }
  };

  useEffect(() => {
    handleIsUser();
  }, []);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handlePwChange = (event) => {
    setPw(event.target.value);
  };
  const handleUpdate = (e, { calculations }) => {
    setCalcul(calculations);
  };

  const handleValideToken = async () => {
    const userId = window.localStorage.getItem("id");
    const access = window.localStorage.getItem("access_token");
    if (userId === null || access === null) return;
    try {
      const resp = await axios.get(
        `http://www.hongsick.com/api/auth/me/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
    } catch (e) {
      if (e.response.status === 401) {
        console.log("401");
        const currentRefresh = window.localStorage.getItem("refresh_token");

        //try {
        const resp = await axios.post(
          `http://www.hongsick.com/api/auth/refresh-tokens`,
          { refreshToken: currentRefresh }
        );
        console.log("재요청");
        const access = resp.data.access.token;
        const refresh = resp.data.refresh.token;
        window.localStorage.setItem("access_token", access);
        window.localStorage.setItem("refresh_token", refresh);
        /*const response = await axios.get(
            `http://www.hongsick.com/api/auth/me/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${access}`,
              },
            }
          );
        } catch (error) {
          window.localStorage.removeItem("access_token");
          window.localStorage.removeItem("refresh_token");
          window.localStorage.removeItem("id");
          dispatch(allActions.loginActions.logOutUser());
          alert("로그인 해주세요");
        }*/
      }
    }
  };
  handleValideToken();
  console.log(loginInfo);
  return (
    <>
      <SVisibility className="Vcontainer" onUpdate={handleUpdate}>
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
              {loginInfo ? (
                //<Menu onClick={handleLogout}>{loginInfo.profile.nickname}</Menu>
                <UserDropdown
                  id={loginInfo.id}
                  nickname={loginInfo.profile.nickname}
                />
              ) : (
                <Menu
                  onClick={() => dispatch(allActions.modalActions.openModal())}
                >
                  User
                </Menu>
              )}
            </MenuContainer>
          </Content>
        </Container>
      </SVisibility>
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
            {loginInfo ? (
              <UserDropdown
                id={loginInfo.id}
                nickname={loginInfo.profile.nickname}
              />
            ) : (
              <Menu
                onClick={() => dispatch(allActions.modalActions.openModal())}
              >
                User
              </Menu>
            )}
          </MenuContainer>
        </Content>
      </Fixedheader>
      <Modal
        size="mini"
        dimmer="blurring"
        open={open}
        onClose={() => dispatch(allActions.modalActions.closeModal())}
      >
        <LoginModal />
      </Modal>
    </>
  );
});

/*
외부광선 오바임
그라데이션 위에 흰 폰트를 얹어라!!
가우시안 블러 150 이상으로 올리면 개멋짐
*/

import React, { useState, useEffect } from "react";
import { Modal, Button, Icon, Loader } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActinos from "../store/actions";
import allActions from "../store/actions";
import apis from "../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
`;

const Userpanel = styled.div`
  font-size: 14px;
  color: #a2a2a2;
  margin-bottom: 0px;
`;

const BarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  width: 50%;
  height: 2px;
  background-color: #c2c2c2;
`;

const Or = styled.div`
  width: 40px;
  font-size: 1rem;
  font-weight: 600;
  margin: 10px;
`;

const Input = styled.input`
  border: 1px solid #c2c2c2;
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  left: -2px;
  margin-bottom: 10px;
  line-height: 40px;
`;

const SButton = styled(Button)`
  &&& {
    height: 40px;
    margin-bottom: 10px;
  }
`;

const Btn = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -2px;
  color: #fff;
  i {
    position: absolute;
    left: 20px;
    margin-right: 10px;
    font-size: 18px;
  }
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  span {
    align-self: center;
    position: relative;
    left: 11px;
    top: 2px;
  }
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  padding: 0 20px;
  margin-bottom: 10px;
`;

const ErrorDiv = styled.div`
  position: ${(props) => (props.error ? "relative" : "absolute")};
  font-weight: 700;
  color: #e74c3c;
  margin-bottom: 10px;
  font-size: 14px;
  opacity: ${(props) => (props.error ? "1" : "0")};
  top: ${(props) => (props.error ? "0" : "-20px")};
`;

const SIcon = styled(Icon)`
  &&& {
    float: left;
  }
`;

const LoginModal = () => {
  const open = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState("");
  const loginInfo = useSelector((state) => state.loginInfo);
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };
  const handleSubmit = async () => {
    console.log("submit");
    if (id === "") {
      setError("이메일을 입력하세요.");
      return;
    } else if (pw === "") {
      setError("비밀번호를 입력하세요.");
      return;
    } else {
      setLoading(true);
      setDisabled("disabled");
      const info = { email: id, password: pw };
      try {
        /*const resp = await axios.post(
          "http://www.hongsick.com/api/auth/login",
          info
        );*/
        const resp = await apis.login(info);
        setLoading(false);
        setDisabled("");
        setData(resp);
        dispatch(allActinos.modalActions.closeModal());
      } catch (e) {
        console.log(e);
        setError("이메일 또는 비밀번호가 일치하지 않습니다.");
        setLoading(false);
        setDisabled("");
      }
    }
  };
  useEffect(() => {
    if (data !== null) {
      console.log(data);
      const access = data.data.tokens.access.token;
      const refresh = data.data.tokens.refresh.token;
      const user = data.data.user;
      const id = user.id;
      window.localStorage.setItem("access_token", access);
      window.localStorage.setItem("refresh_token", refresh);
      window.localStorage.setItem("id", id);
      dispatch(allActions.loginActions.loginUserSuccess(user));
    }
  }, [data]);

  return (
    <>
      <Modal.Header>홍대병 로그인</Modal.Header>
      <Modal.Content>
        <Container>
          <Input type="text" placeholder="이메일" onChange={handleIdChange} />
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={handlePwChange}
          />
          <ErrorDiv error={error}>{error}</ErrorDiv>
          <SButton
            className={disabled}
            color="orange"
            fluid
            onClick={handleSubmit}
          >
            {loading ? (
              <Loader size="mini" active inline="centered" />
            ) : (
              "홍대병 로그인"
            )}
          </SButton>
          <Userpanel>
            ID 찾기 | 비밀번호 찾기 |{" "}
            <Link
              to="/register"
              onClick={() => dispatch(allActinos.modalActions.closeModal())}
            >
              회원가입
            </Link>
          </Userpanel>

          <BarContainer>
            <Bar />
            <Or>또는</Or>
            <Bar />
          </BarContainer>

          <SButton color="facebook" fluid>
            <SIcon name="facebook" /> 페이스북 로그인
          </SButton>
          <SButton color="google plus" fluid>
            <SIcon name="google" /> 구글 로그인
          </SButton>
          <Btn color="#2DB500" hoverColor="rgba(38, 128, 9)">
            <i className="xi-naver-square" />
            <span>네이버 로그인</span>
          </Btn>
          <Btn color="#fcd412" hoverColor="rgba(217, 182, 15)">
            <i className="xi-kakaotalk" />
            <span>카카오톡 로그인</span>
          </Btn>
        </Container>
      </Modal.Content>
    </>
  );
};

export default LoginModal;

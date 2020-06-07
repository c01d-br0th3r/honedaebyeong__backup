import React, { useState, useEffect } from "react";
import { Input, Checkbox, Button } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../components/Header";
import Privacy from "./privacy";
import apis from "../api";

const Wrap = styled.div`
  clear: both;
  width: 450px;
  margin: 0 auto;
  padding: 70px 0;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const InputA = styled(Input)`
  padding-bottom: 19px;
`;
const InputB = styled(Input)`
  padding-bottom: 19px;
  width: 48%;
  margin-right: 2%;
`;
const InputC = styled(Input)`
  padding-bottom: 19px;
  width: 48%;
  margin-left: 2%;
`;

const UserAgreement = styled.div`
  width: 100%;
  padding-bottom: 19px;
`;

const Checkua = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-bottom: 0;
`;

const Contentua = styled.div`
  width: 100%;
  height: 130px;
  color: #161616;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  line-height: 1.8;
  overflow: auto;
  padding: 10px 20px;
`;

const ErrorMsg = styled.div`
  font-weight: 700;
  color: #ff5252;
  text-align: center;
  margin-bottom: 10px;
`;

const RegistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPw] = useState("");
  const [passwordChk, setPwchk] = useState("");
  const [ua, setUa] = useState(false);
  const [emp, setEmp] = useState(false);
  const [error, setError] = useState("");
  const [resp, setResp] = useState(null);
  const [isOK, setIsOK] = useState({
    isEmail: "",
    isPassword: "",
    isNickname: "",
  });

  const HandleChange = (e) => {
    let id = e.target.id;
    if (id === "email") {
      setEmail(e.target.value);
    } else if (id === "name") {
      setName(e.target.value);
    } else if (id === "nickname") {
      setNickname(e.target.value);
    } else if (id === "password") {
      setPw(e.target.value);
    } else if (id === "passwordChk") {
      setPwchk(e.target.value);
    } else {
      console.log("ERROR");
    }
  };
  const HandleSubmit = async () => {
    if (ua === false) {
      alert("이용약관에 대한 내용 확인 후 동의해주세요.");
      return;
    }
    const data = {
      email: email,
      name: name,
      nickname: nickname,
      password: password,
      passwordConfirmation: passwordChk,
    };
    try {
      /*const regi = await axios.post(
        "http://www.hongsick.com/api/auth/register",
        data
      );*/
      const regi = await apis.register(data);
      console.log(regi);
      setResp(regi);
    } catch (e) {
      const mess = e.response.data.message;
      console.log(mess);
      if (mess && mess.includes("email")) {
        setIsOK({
          ...isOK,
          isEmail: "error",
          isPassword: "",
          isNickname: "",
        });
        setError("이메일 형식에 맞지 않습니다.");
        return;
      } else if (mess && mess.includes("Confirmation")) {
        setIsOK({
          ...isOK,
          isPassword: "error",
          isEmail: "",
          isNickname: "",
        });
        setError("패스워드 확인이 일치하지 않습니다.");
        return;
      } else if (mess && mess.includes("password")) {
        setIsOK({
          ...isOK,
          isPassword: "error",
          isEmail: "",
          isNickname: "",
        });
        setError("패스워드 형식에 맞지 않습니다.");
        return;
      } else if (mess && mess.includes("Email")) {
        setIsOK({
          ...isOK,
          isEmail: "error",
          isPassword: "",
          isNickname: "",
        });
        setError("이메일이 이미 존재합니다.");
        return;
      } else if (mess && mess.includes("Nickname")) {
        setIsOK({
          ...isOK,
          isNickname: "error",
          isEmail: "",
          isPassword: "",
        });
        setError("닉네임이 이미 존재합니다.");
        return;
      }

      return;
    }
    window.location.href = "/";
  };

  useEffect(() => {
    if (resp !== null) {
      const access = resp.data.tokens.access.token;
      const refresh = resp.data.tokens.refresh.token;
      window.localStorage.setItem("access_token", access);
      window.localStorage.setItem("refresh_token", refresh);
    }
  }, [resp]);

  return (
    <>
      <Header />
      <Wrap>
        <Title>홍대병 회원가입</Title>
        <InputA
          placeholder="이메일"
          fluid
          id="email"
          value={email}
          onChange={HandleChange}
          className={isOK.isEmail}
        ></InputA>
        <InputB
          placeholder="이름"
          id="name"
          value={name}
          onChange={HandleChange}
        ></InputB>
        <InputC
          placeholder="닉네임"
          id="nickname"
          value={nickname}
          onChange={HandleChange}
          className={isOK.isNickname}
        ></InputC>
        <InputA
          placeholder="비밀번호 (8자리 이상, 영문 및 숫자 한 개 이상 포함)"
          fluid
          id="password"
          value={password}
          onChange={HandleChange}
          type="password"
          className={isOK.isPassword}
        ></InputA>
        <InputA
          placeholder="비밀번호 확인"
          fluid
          id="passwordChk"
          value={passwordChk}
          onChange={HandleChange}
          type="password"
          className={isOK.isPassword}
        ></InputA>
        <UserAgreement>
          <Checkua onClick={() => setUa(!ua)}>
            <Checkbox label="개인정보 수집 및 이용 동의" checked={ua} />
          </Checkua>
          <Contentua>
            <Privacy />
          </Contentua>
        </UserAgreement>
        <UserAgreement>
          <Checkua onClick={() => setEmp(!emp)}>
            <Checkbox
              label="(선택) 이벤트 등 프로모션 안내 메일 수신에 동의합니다."
              checked={emp}
            />
          </Checkua>
        </UserAgreement>
        <ErrorMsg>{error}</ErrorMsg>
        <Button color="orange" fluid onClick={HandleSubmit}>
          홍대병 가입
        </Button>
      </Wrap>
    </>
  );
};

export default RegistForm;

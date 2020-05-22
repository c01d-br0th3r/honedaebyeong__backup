import React, { useState } from "react";
import { Input, Checkbox, Button } from "semantic-ui-react";
import styled from "styled-components";

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

const Contentua = styled.iframe`
  width: 100%;
  height: 130px;
  padding: 0 0 0 19px;
  color: #161616;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  line-height: 1.5;
`;

const RegistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPw] = useState("");
  const [passwordChk, setPwchk] = useState("");
  const [ua, setUa] = useState(false);
  const [emp, setEmp] = useState(false);

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
  const HandleSubmit = () => {
    if (ua === false) {
      alert("이용약관에 대한 내용 확인 후 동의해주세요.");
      return;
    }
    const data = {
      email: email,
      name: name,
      nickname: nickname,
      pw: password,
      pwc: passwordChk,
      emailpromotion: emp,
    };
    console.log(data);
  };
  return (
    <Wrap>
      <Title>홍대병 회원가입</Title>

      <InputA
        placeholder="이메일"
        fluid
        id="email"
        value={email}
        onChange={HandleChange}
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
      ></InputC>
      <InputA
        placeholder="비밀번호"
        fluid
        id="password"
        value={password}
        onChange={HandleChange}
      ></InputA>
      <InputA
        placeholder="비밀번호 확인"
        fluid
        id="passwordChk"
        value={passwordChk}
        onChange={HandleChange}
      ></InputA>
      <UserAgreement>
        <Checkua onClick={() => setUa(!ua)}>
          <Checkbox label="개인정보 수집 및 이용 동의" checked={ua} />
        </Checkua>
        <Contentua src="https://member.nexon.com/html/privacy/privacy_1.html"></Contentua>
      </UserAgreement>
      <UserAgreement>
        <Checkua onClick={() => setEmp(!emp)}>
          <Checkbox
            label="(선택) 이벤트 등 프로모션 안내 메일 수신에 동의합니다."
            checked={emp}
          />
        </Checkua>
      </UserAgreement>
      <Button color="orange" fluid onClick={HandleSubmit}>
        홍대병 가입
      </Button>
    </Wrap>
  );
};

export default RegistForm;

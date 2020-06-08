import React, { useEffect, useState } from "react";
import styled from "styled-components";
import apis from "../api";
import Header from "../components/Header";

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  padding-top: 50px;
`;

const Name = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Email = styled.div`
  font-size: 24px;
  font-weight: 600;
  opacity: 0.6;
  margin-bottom: 20px;
`;

const Nickname = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    match: {
      params: { id },
    },
  } = props;
  const getUserInfo = async (id) => {
    const access = window.localStorage.getItem("access_token");
    try {
      /*const resp = await axios.get(
        `http://www.hongsick.com/api/auth/me/${id}`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );*/
      const resp = await apis.authMe(id, access);
      setUserInfo(resp.data);
    } catch (e) {
      console.log(e);
      setError("Invalid Access");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserInfo(id);
  }, []);
  return (
    <div>
      <Header />
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {error ? (
              <div>{error}</div>
            ) : (
              <>
                <Name>{userInfo.user.profile.name}</Name>
                <Email>{userInfo.user.email}</Email>
                <Nickname>{userInfo.user.profile.nickname}</Nickname>
              </>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default UserInfo;

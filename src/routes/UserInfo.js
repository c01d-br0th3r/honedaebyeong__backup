import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

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
      const resp = await axios.get(
        `http://www.hongsick.com/api/auth/me/${id}`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error ? (
            <div>{error}</div>
          ) : (
            <>
              <div>{userInfo.user.profile.name}</div>
              <div>{userInfo.user.email}</div>
              <div>{userInfo.user.profile.nickname}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserInfo;

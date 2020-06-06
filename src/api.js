import axios from "axios";

const apis = {
  authMe: (userId, access) =>
    axios.get(`http://www.hongsick.com/api/auth/me/${userId}`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }),
  refreshToken: (refresh) =>
    axios.get(`http://www.hongsick.com/api/auth/refresh-tokens`, {
      refreshToken: refresh,
    }),
};

export default apis;

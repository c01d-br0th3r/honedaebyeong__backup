import axios from "axios";

const apis = {
  authMe: (userId, access) =>
    axios.get(`http://www.hongsick.com/api/auth/me/${userId}`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }),
  refreshToken: (refresh) =>
    axios.post(`http://www.hongsick.com/api/auth/refresh-tokens`, {
      refreshToken: refresh,
    }),
  login: (info) => axios.post("http://www.hongsick.com/api/auth/login", info),
  register: (data) =>
    axios.post("http://www.hongsick.com/api/auth/register", data),
};

export default apis;

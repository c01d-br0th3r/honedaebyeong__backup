const loginUser = (id) => {
  return {
    type: "LOGIN_USER",
    id,
  };
};

const loginUserSuccess = (user) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    user,
  };
};

const loginUserFail = (error) => {
  return {
    type: "LOGIN_USER_FAIL",
    error,
  };
};

const logOutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};

export default { loginUser, loginUserSuccess, loginUserFail, logOutUser };

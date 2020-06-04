const loginInfo = (user = null, action) => {
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return action.user;
    case "LOGIN_USER_FAIL":
      return action.error;
    case "LOGOUT_USER":
      return null;
    default:
      return user;
  }
};

export default loginInfo;

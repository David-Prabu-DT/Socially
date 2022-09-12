const setSignupUser = <T>(user: T) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const setAccessToken = <T>(_token: T) => {
  localStorage.setItem("accessToken", JSON.stringify(_token));
};

const setRefreshToken = <T>(_token: T) => {
  localStorage.setItem("RefreshToken", JSON.stringify(_token));
};

const getAccessToken = () => {
  // console.log(JSON.parse(localStorage.getItem("accessToken") || "{}"));
  return JSON.parse(localStorage.getItem("accessToken") || "{}");
};

const getRefreshToken = () => {
  console.log(localStorage.getItem("RefreshToken"));

  return JSON.parse(localStorage.getItem("RefreshToken") || "{}");
};

const UpdateAccessToken = <T>(_token: T) => {
  localStorage.setItem("accessToken", JSON.stringify(_token));
};

export const TokenService = {
  setSignupUser,
  setAccessToken,
  getAccessToken,
  UpdateAccessToken,
  getRefreshToken,
  setRefreshToken,
};

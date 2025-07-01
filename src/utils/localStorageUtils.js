export const lsSetToken = (token) => {
  localStorage.setItem("token", token);
};

export const lsGetToken = () => {
  return localStorage.getItem("token");
};

export const lsRemoveToken = () => {
  localStorage.removeItem("token");
};

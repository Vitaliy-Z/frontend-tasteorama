const TOKEN_KEY = "token";

export const lsSetToken = (token) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const lsGetToken = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

export const lsRemoveToken = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};

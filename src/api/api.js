import axios from "axios";
import { lsRemoveToken, lsSetToken } from "../utils/localStorageUtils.js";

const apiClient = axios.create({
  baseURL: "https://backend-tasteorama.onrender.com/api",
});

export const setAuthorizationToken = (token) => {
  lsSetToken(token);
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAuthorizationToken = () => {
  lsRemoveToken();
  apiClient.defaults.headers.common.Authorization = "";
};

export default apiClient;

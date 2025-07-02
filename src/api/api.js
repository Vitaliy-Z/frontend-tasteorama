// import axios from "axios";
// import { lsRemoveToken, lsSetToken } from "../utils/localStorageUtils.js";

// const apiClient = axios.create({
//   baseURL: "https://backend-tasteorama.onrender.com/api"
// });

// export const setAuthorizationToken = (token) => {
//   lsSetToken(token);
//   apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const deleteAuthorizationToken = () => {
//   lsRemoveToken();
//   apiClient.defaults.headers.common.Authorization = "";
// };

// export default apiClient;
import axios from "axios";
import {
  lsGetToken,
  lsRemoveToken,
  lsSetToken,
} from "../utils/localStorageUtils.js";
import { store } from "../redux/store";
import { fetchLogoutUser } from "../redux/auth/operations";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // refreshToken передається автоматично
});

// ===== SET TOKEN =====
export const setAuthorizationToken = (token) => {
  lsSetToken(token);
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAuthorizationToken = () => {
  lsRemoveToken();
  delete apiClient.defaults.headers.common.Authorization;
};

// ===== REQUEST INTERCEPTOR =====
apiClient.interceptors.request.use((config) => {
  const token = lsGetToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ===== RESPONSE INTERCEPTOR =====
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.get(
          "https://backend-tasteorama.onrender.com/api/auth/refresh",
          { withCredentials: true }
        );

        const newAccessToken =
          refreshResponse?.data?.data?.accessToken ||
          refreshResponse?.data?.accessToken;

        if (!newAccessToken) {
          throw new Error("No accessToken in refresh response");
        }

        setAuthorizationToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        deleteAuthorizationToken(); // Очистити токен з localStorage
        store.dispatch(fetchLogoutUser()); // Примусове логаут
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;

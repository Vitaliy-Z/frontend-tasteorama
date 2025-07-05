import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, {
  deleteAuthorizationToken,
  setAuthorizationToken
} from "../../api/api.js";

export const fetchRegisterUser = createAsyncThunk(
  "auth/fetchRegisterUser",
  async (newUser, thunkAPI) => {
    try {
      const { data } = await apiClient.post("/auth/register", newUser);
      const { accessToken } = data.data;
      setAuthorizationToken(accessToken);
      const dataUser = await apiClient.get("/users");
      const user = dataUser.data.data;
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchLoginUser = createAsyncThunk(
  "auth/fetchLoginUser",
  async (credentials, thunkAPI) => {
    try {
      const dataLogin = await apiClient.post("/auth/login", credentials);
      const { accessToken } = dataLogin.data.data;
      setAuthorizationToken(accessToken);
      const dataUser = await apiClient.get("/users");
      const user = dataUser.data.data;
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchLogoutUser = createAsyncThunk(
  "auth/fetchLogoutUser",
  async (_, thunkAPI) => {
    try {
      await apiClient.post("/auth/logout");
      deleteAuthorizationToken();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, thunkAPI) => {
    try {
      const dataUser = await apiClient.get("/users");
      const user = dataUser.data.data;
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.error = null;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload || "Registration failed";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.error = null;
        localStorage.setItem("token", action.payload.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload || "Login failed";
        state.isLoggedIn = false;
      }),
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

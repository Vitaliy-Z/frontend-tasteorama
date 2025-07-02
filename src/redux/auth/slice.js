import { createSlice } from "@reduxjs/toolkit";

import {
  fetchRegisterUser,
  fetchLoginUser,
  fetchLogoutUser,
} from "./operations.js";
import {
  fetchAddRecipesToFavorite,
  fetchDeleteRecipesFromFavorite,
} from "../recipes/operations.js";
import { handleError, handlePending } from "../../utils/reduxUtils.js";
import { deleteAuthorizationToken } from "../../api/api.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchRegisterUser.pending, handlePending)
      .addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(fetchRegisterUser.rejected, handleError)

      .addCase(fetchLoginUser.pending, handlePending)
      .addCase(fetchLoginUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(fetchLoginUser.rejected, handleError)

      .addCase(fetchLogoutUser.pending, handlePending)
      .addCase(fetchLogoutUser.fulfilled, (state) => {
        deleteAuthorizationToken();
        state.error = null;
        state.user = null;
        state.isLoading = false;
      })
      .addCase(fetchLogoutUser.rejected, handleError)

      .addCase(fetchAddRecipesToFavorite.pending, handlePending)
      .addCase(fetchAddRecipesToFavorite.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(fetchAddRecipesToFavorite.rejected, handleError)

      .addCase(fetchDeleteRecipesFromFavorite.pending, handlePending)
      .addCase(
        fetchDeleteRecipesFromFavorite.fulfilled,
        (state, { payload }) => {
          state.error = null;
          state.user = payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchDeleteRecipesFromFavorite.rejected, handleError),
});

export default authSlice.reducer;

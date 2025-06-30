import { createSlice } from "@reduxjs/toolkit";

const initState = null;

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    addUser: (state, action) => action.payload,
    deleteUser: () => initState
  }
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

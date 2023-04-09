import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.allUsers = payload;
    },
  },
});

export const { addUsers } = userSlice.actions;
export const getAllUsers = (state) =>state.users;
export default userSlice.reducer;

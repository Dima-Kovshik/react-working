import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: "11",
  firstName: "11",
  lastName: "11",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    removeUser(state) {
      state.id = "11";
      state.firstName = "11";
      state.lastName = "11";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

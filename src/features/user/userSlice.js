import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    roleId: null,
    token: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.email
      state.roleId = action.payload.roleId
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('roleId', action.payload.roleId);
    },
    logout: (state) => {
      state.user = null
      localStorage.clear();
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
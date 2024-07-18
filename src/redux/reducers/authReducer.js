import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  token: '',
  isAuth: false,
  username: '',
  firstName: '',
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuth = true;
    },
    updateUserProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout: (state) => {
      state.email = '';
      state.token = '';
      state.isAuth = false;
      state.username = '';
      state.firstName = '';
      state.lastName = '';
    },
  },
});

export const { loginSuccess, user, updateUserProfile, logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  password: null,
  id: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.id = payload.id;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.password = null;
      state.id = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUser, removeUser } = authSlice.actions;

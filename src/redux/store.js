import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './auth/auth.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

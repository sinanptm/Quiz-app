import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  isAdmin: typeof window !== 'undefined' ? localStorage.getItem('isAdmin') === 'true' : false,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setCredential: (state) => {
      state.isAdmin = true;
    },
    removeCredentials: (state) => {
      state.isAdmin = false;
    },
  },
});

export const { setCredential, removeCredentials } = adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admin.isAdmin;

export default adminSlice.reducer;

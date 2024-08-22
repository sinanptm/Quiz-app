import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  isAdmin: typeof window !== 'undefined' ? localStorage.getItem('isAdmin') === 'true' : false,
  isFormOpen:false
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
    openLoginForm:(state)=>{
      if (!state.isAdmin) {
        state.isFormOpen = !state.isFormOpen
      }
    }
  },
});

export const { setCredential, removeCredentials, openLoginForm } = adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admin.isAdmin;
export const selectForm = (state:RootState) => state.admin.isFormOpen;

export default adminSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  isAdmin: typeof window !== "undefined" ? localStorage.getItem("isAdmin") === "true" : false,
  isFormOpen: false,
  AddAdminForm: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setCredential: (state) => {
      state.isAdmin = true;
    },
    removeCredentials: (state) => {
      state.isAdmin = false;
    },
    openLoginForm: (state) => {
      if (!state.isAdmin) {;
        state.isFormOpen = !state.isFormOpen;
      }
    },
    addQuestionModel: (state) => {
      if (!state.isAdmin) {
        state.AddAdminForm = !state.AddAdminForm;
      }
    },
  },
});

export const { setCredential, removeCredentials, openLoginForm, addQuestionModel } = adminSlice.actions;

export const selectAdmin = (state: RootState) => state.admin.isAdmin;
export const selectForm = (state: RootState) => state.admin.isFormOpen;

export default adminSlice.reducer;

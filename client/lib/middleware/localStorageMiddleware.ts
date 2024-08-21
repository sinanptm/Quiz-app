import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  // After the action is dispatched, sync the state to local storage
  const state = storeAPI.getState();
  if (state.admin.isAdmin !== undefined) {
    localStorage.setItem('isAdmin', state.admin.isAdmin.toString());
  }

  return result;
};

export default localStorageMiddleware;

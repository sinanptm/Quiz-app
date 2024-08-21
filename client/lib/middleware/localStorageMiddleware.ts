// middleware/localStorageMiddleware.ts

import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  if (typeof window !== 'undefined') { // Ensure this is running in the browser
    const state = storeAPI.getState();
    if (state.admin.isAdmin !== undefined) {
      localStorage.setItem('isAdmin', state.admin.isAdmin.toString());
    }
  }

  return result;
};

export default localStorageMiddleware;

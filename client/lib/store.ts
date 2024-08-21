import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/adminSlice";
import questionsApiSlice from "./features/questionsApiSlice";
import localStorageMiddleware from "./middleware/localStorageMiddleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      admin: adminSlice,
      [questionsApiSlice.reducerPath]: questionsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(questionsApiSlice.middleware)
        .concat(localStorageMiddleware),  
    devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

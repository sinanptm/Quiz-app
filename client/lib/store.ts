import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import questionsApiSlice from "./features/questionsApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      [questionsApiSlice.reducerPath]: questionsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(questionsApiSlice.middleware),
    devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production"
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

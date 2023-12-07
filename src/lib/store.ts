import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./Features/exampleSlice";

export const store = () => {
  return configureStore({
    reducer: {
      example: exampleSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

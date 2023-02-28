import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemon-slice";
import userReducer from "./features/user-slice";

export const store = configureStore({
  reducer: { pokemon: pokemonReducer, user: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

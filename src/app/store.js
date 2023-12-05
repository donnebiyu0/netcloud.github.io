import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import { setupListeners } from "@reduxjs/toolkit/query";
import genreOrCategoryReducer from "../components/features/currentGenreOrCategory";

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

setupListeners(store.dispatch);

export default store;

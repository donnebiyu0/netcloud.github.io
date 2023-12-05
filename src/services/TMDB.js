import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// '/movie/popular?language=en-US&page=1
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // get movies by type
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // get movies by category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        // get movie by genre
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        if (searchQuery && searchQuery !== "") {
          return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // get popular movies
        return `/movie/popular?language=en-US&page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // get Geners
    getGeneres: builder.query({
      query: () => `/genre/movie/list?language=en&api_key=${tmdbApiKey}`,
    }),
    // get movie detail
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?language=en&append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
    // get movie recommendations
    // 'https://api.themoviedb.org/3/movie/movie_id/recommendations?language=en-US&page=1'
    gerMovieRecommendations: builder.query({
      query: (id) =>
        `movie/${id}/recommendations?language=en-US&page=1&api_key=${tmdbApiKey}`,
    }),
    getActors: builder.query({
      // 'https://api.themoviedb.org/3/person/person_id?language=en-US'
      query: (id) => `/person/${id}?language=en-US&api_key=${tmdbApiKey}`,
    }),
    // ger movies by person
    gerActorMovies: builder.query({
      query: (id) =>
        `/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_cast=${id}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGeneresQuery,
  useGetMovieQuery,
  useGerMovieRecommendationsQuery,
  useGetActorsQuery,
  useGerActorMoviesQuery,
} = tmdbApi;

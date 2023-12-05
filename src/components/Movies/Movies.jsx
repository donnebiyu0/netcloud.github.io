import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import { FeaturedMovie, MovieList, Pagination } from "..";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem"></CircularProgress>
      </Box>
    );
  }
  if (!data.results) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies match your search...
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Box>
        <Typography variant="h7">
          Error has occured
          <br />
          don't worry it's not your fault we are working on it
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      component="main"
      style={{ overflow: "hidden", padding: "0", width: "100%" }}
    >
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </Box>
  );
};

export default Movies;

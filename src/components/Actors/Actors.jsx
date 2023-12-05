import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useStyles from "./style";
import { useGetActorsQuery, useGerActorMoviesQuery } from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";
const Actors = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorsQuery(id);
  const {
    data: actorMovies,
    isFetching: actorMoviesFetching,
    error: actorError,
  } = useGerActorMoviesQuery(id);
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.actorContainer}>
        <Grid item lg={5} xlg={4}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
            alt={data?.name}
            className={classes.actorImg}
          />
        </Grid>
        <Grid
          item
          container
          lg={7}
          xlg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify" paragraph gutterBottom>
            {data?.biography}
          </Typography>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {actorMovies ? (
          <MovieList movies={actorMovies} />
        ) : (
          console.log("actor movies error")
        )}
      </Box>
    </>
  );
};

export default Actors;

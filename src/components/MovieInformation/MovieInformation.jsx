import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  useGetMovieQuery,
  useGerMovieRecommendationsQuery,
} from "../../services/TMDB";

import { Box, Grid, Link, Rating } from "@mui/material";
import { Link as rLink } from "react-router-dom";
import useStyles from "./style";
import { Typography } from "@material-ui/core";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { MovieList } from "..";
const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const {
    data: recomData,
    isFetching: recomIsFetching,
    error: recomError,
  } = useGerMovieRecommendationsQuery(id);
  const classes = useStyles();
  if (isFetching) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return null;
  }
  console.log(data);
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
          className={classes.poster}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" gutterBottom align="center">
          {data?.title}({data?.release_date.split("-")[0]})
        </Typography>
        <Typography variant="h5" gutterBottom align="center">
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={data?.vote_average / 2} />
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: "10px" }}
            >
              {data?.vote_average.toFixed(1)} / 10
            </Typography>
          </Box>
          <Typography>
            {(data?.runtime / 60).toFixed(0)}hr {data?.runtime % 60}m
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre, i) => {
            return (
              <Link
                key={i}
                to="/"
                display="flex"
                style={{ textDecoration: "none" }}
              >
                <ArrowRightIcon style={{ marginRight: "10px" }} />
                <Typography variant="subtitle1">{genre.name}</Typography>
              </Link>
            );
          })}
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: "10px" }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "10px" }}>
          {data?.overview}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Top Cast
        </Typography>
        <Grid item container spacing={2} style={{ marginTop: "10px" }}>
          {data &&
            data.credits.cast
              .map((character, i) => (
                <Grid
                  onClick={() => console.log("hey")}
                  xsm={4}
                  md={2}
                  key={i}
                  component={rLink}
                  to={`/actors/${character.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                    alt={character?.name}
                    className={classes.castImage}
                  />
                  <Typography
                    variant="subtitle2"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {character.name}
                  </Typography>
                </Grid>
              ))
              .slice(0, 6)}
        </Grid>
      </Grid>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          You Might also like
          {recomData ? <MovieList movies={recomData} /> : <p>not found</p>}
        </Typography>
        {/* loop throgh recommended movies based on the movie selected */}
      </Box>
    </Grid>
  );
};

export default MovieInformation;

import React from "react";
import useStyles from "./style";
import { Grid, Grow, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movies/${movie.id}`}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className={classes.image}
              alt="poster"
            />
          ) : (
            <img
              src={"https://www.fillmurray.com/200/300"}
              className={classes.image}
              alt="poster"
            />
          )}
          <Typography variant="h5" className={classes.title}>
            {movie.title}
          </Typography>
          <Rating
            readOnly
            value={movie.vote_average / 2}
            precision={0.1}
            className={classes.rating}
          />
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;

import React from "react";
import useStyles from "./styles";
import { Box, CardMedia } from "@material-ui/core";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FeaturedMovie = ({ movie }) => {
  const classes = useStyles();
  if (!movie) {
    return null;
  }
  return (
    <Box
      component={Link}
      to={`/movies/${movie.id}`}
      className={classes.featuredMovieContainer}
    >
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className={classes.cardMedia}
          title={movie.title}
        />
        <CardContent
          className={classes.cardContent}
          classes={{ root: classes.LinkcardContentRoot }}
        >
          <Typography variant="h5" gutterBottom>
            {movie.title}
            {console.log(movie.title)}
          </Typography>
          <Typography variant="body2">{movie.overview}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FeaturedMovie;

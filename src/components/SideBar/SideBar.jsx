import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import logo from "../../media/3.ico";
import useStyles from "./styles";
import { useGetGeneresQuery } from "../../services/TMDB";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../features/currentGenreOrCategory";

const catigories = [
  { label: "Popular", value: "popular" },
  { label: "Top rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];
const demoCatigories = [
  { label: "Comedy", value: "comedy" },
  { label: "Horrer", value: "horrer" },
  { label: "Action", value: "action" },
  { label: "Animation", value: "animation" },
];

const SideBar = ({ isMobileOpen }) => {
  const theme = useTheme();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, isFetching } = useGetGeneresQuery();
  const classes = useStyles();
  const dispatch = useDispatch();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem"></CircularProgress>
      </Box>
    );
  }

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img src={logo} alt="" className={classes.image} />
      </Link>
      <Divider />
      <List style={{ marginLeft: "20px" }}>
        <ListSubheader>Catigories</ListSubheader>
        {catigories.map(({ label, value }) => (
          <Link to="/" key={value} className={classes.links}>
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List style={{ marginLeft: "20px" }}>
        <ListSubheader>Generes</ListSubheader>
        {data.genres.map(({ name, id }) => (
          <Link to="/" key={id} className={classes.links}>
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(id))}
              button
            >
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default SideBar;

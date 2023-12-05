import React, { useState } from "react";
import useStyles from "./style";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { searchMovie } from "../features/currentGenreOrCategory";

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        variant="standard"
        placeholder="Search"
        sx={{ input: { color: "#dddd" } }}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "#fef" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;

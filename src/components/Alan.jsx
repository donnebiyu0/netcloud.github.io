import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { selectGenreOrCategory } from "./features/currentGenreOrCategory";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { searchMovie } from "./features/currentGenreOrCategory";

const useAlan = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    alanBtn({
      key: "4160fc5b5970ce97f7afda01a1906eb42e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, genres, genre, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genre.toLowerCase()
          );
          if (foundGenre) {
            history.push("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          }
          if (["top rated", "popular", "upcomming"].includes(genre)) {
            if (genre == "top rated") {
              history.push("/");
              dispatch(selectGenreOrCategory("top_rated"));
            } else {
              history.push("/");
              dispatch(selectGenreOrCategory(genre));
            }
          }
        }
        if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;

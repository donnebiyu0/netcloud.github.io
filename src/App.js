import "./App.css";
import { Box, CssBaseline, AppBar } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import useStyles from "./styles";
import useAlan from "./components/Alan";
import {
  Actors,
  MovieInformation,
  Profile,
  NavBar,
  Movies,
} from "./components";
import { useRef } from "react";

function App() {
  const classes = useStyles();
  useAlan();
  const alanBtnContainer = useRef();
  return (
    <div className={classes.root} style={{ display: "flex !important" }}>
      {/* <AppBar position="fixed" className={classes.appBar} /> */}

      <CssBaseline />
      <NavBar />
      <div component="main" className={classes.container}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <Movies component="main" />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/movies/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
        </Switch>
      </div>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;

import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  featuredMovieContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "330px",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      height: "440px",
    },
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  cardRoot: {
    position: "relative",
  },
  cardMedia: {
    position: "absolute",
    top: "0",
    right: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.575)",
    backgroundBlendMode: "darken",
  },
  cardContent: {
    color: "#fff",
    width: "40%",
    zIndex: "10",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContentRoot: {
    position: "relative",
    backgroundColor: "transparent",
  },
}));

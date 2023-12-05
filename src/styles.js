import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
  },
  toolbar: {
    height: "70px",
  },
  container: {
    flexGrow: 1,
    padding: "2em",
    flex: "1 1 100%",
  },
}));

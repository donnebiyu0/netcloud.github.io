import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  actorContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  actorImg: {
    maxWidth: "90%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: ".5em .5em 1em",
  },
}));

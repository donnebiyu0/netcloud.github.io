import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  },
  input: {
    marginTop: "-10px",
    marginBottom: "10px",
    borderColor: "yellow !important",
  },
}));

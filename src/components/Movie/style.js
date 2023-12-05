import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "240px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "0",
    textAlign: "center",
  },
  links: {
    fontWeight: "bolder",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "20px",
    height: "300px",
    marginBottom: "10px",
    transition: "250ms",
    "&:hover": {
      transform: "scale(1.04)",
    },
  },
}));

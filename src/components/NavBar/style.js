import { makeStyles } from "@mui/styles";

const drawerWidth = "240px";

export default makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    height: "80px",
    justifyContent: "center",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
  menuButton: {
    color: "#fff",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
      boxShadow: "10px 5px 5px black",
    },
  },
}));

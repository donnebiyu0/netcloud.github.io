import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    Padding: "10% 0",
  },
  image:{
    width: '70%',
    height: '100px',
    objectFit: 'contain'
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none'
  }
}));
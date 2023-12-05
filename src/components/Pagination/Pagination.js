import React from "react";
import useStyles from "./styles";
import { Button, Typography } from "@mui/material";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const classes = useStyles();
  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };
  if (totalPages === 0) {
    return null;
  }
  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        variant="contained"
        type="button"
        color="primary"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <Typography variant="h4" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        type="button"
        color="primary"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;

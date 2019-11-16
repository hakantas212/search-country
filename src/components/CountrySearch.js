import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  }
}));

const CountrySearch = ({ handleSubmit, handleInputChange, searchInput }) => {
  const classes = useStyles();
  return (
    <section>
      <AppBar position="static" style={{ background: "#f6f7f9" }}>
        <form onSubmit={handleSubmit}>
          <label>
            <TextField
              onChange={handleInputChange}
              value={searchInput}
              id="outlined-search"
              label="Search A Country!"
              className={classes.search}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
              color="primary"
            >
              Search
            </Button>
          </label>
        </form>
      </AppBar>
    </section>
  );
};

export default CountrySearch;

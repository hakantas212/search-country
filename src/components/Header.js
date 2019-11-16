import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    marginBottom: "1em",
    textAlign: "center",
    fontWeight: "900"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Typography className={classes.title} variant="h5">
        Around The World
      </Typography>{" "}
    </header>
  );
};

export default Header;

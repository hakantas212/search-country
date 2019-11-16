import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3)
  },

  card: {
    marginTop: "1em"
  },

  title: {
    fontSize: "1.4em"
  }
}));

const converterStyle = {
  display: "inline-block",
  marginLeft: "0.6em"
};

const Converter = ({
  convertCurrnecy,
  convertInputChange,
  result,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div style={converterStyle}>
        <h1 className={classes.title}>Currency Converter {result}</h1>
        <form onSubmit={convertCurrnecy}>
          <TextField
            id="outlined-number"
            label="Amount SEK"
            onChange={convertInputChange}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={convertCurrnecy}
          >
            Convert
          </Button>
          {props.children}
        </form>
      </div>
    </Card>
  );
};

export default Converter;

import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    minWidth: 400,
    height: "600px",
    marginTop: "1em"
  },
  title: {
    fontSize: "1.8em",
    marginLeft: "0.6em"
  },
  media: {
    width: "99%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

const listStyle = {
  padding: "0",
  marginLeft: "0.6em",
  fontWeight: "800",
  fontSize: "2em",
  listStyle: "none"
};

const Country = ({ country }) => {
  const classes = useStyles();
  const { name, capital, population, currencies, flag } = country;
  return (
    <div>
      <Card className={classes.card}>
        <h1 className={classes.title}> {name} </h1>
        <img className={classes.media} alt="" src={flag} />

        <ul style={listStyle}>
          <li>Capital: {capital}</li>
          <li>Population: {population.toLocaleString()}</li>
          <li>Currency: {currencies[0].code}</li>
        </ul>
      </Card>
    </div>
  );
};

export default Country;

import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Header from "./components/Header";
import Country from "./components/Country";
import Loading from "./components/Loading";
import CountrySearch from "./components/CountrySearch";
import Converter from "./components/Converter";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [country, setCountry] = useState();
  const [error, setError] = useState(false);
  const [searching, setSearching] = useState(false);

  //currencyKey: Variable to hold currency "code" ex, DK (denmark)
  //setCurrencyKey: Sets the currencyKey from the API (https://restcountries.eu/rest/v2/name/${searchInput})
  const [currencyKey, setCurrencyKey] = useState("");

  //fromCurrency: Currency that we convert from, now its always from Sweden (SEK)
  const [fromCurrency] = useState("SEK");

  //Result: Variable to hold the Converted Result
  //setResult: Sets the Result from the response we get from API (https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${currencyKey})
  const [result, setResult] = useState();

  //currency: The value that we want to convert (from SEK) default always 0.
  //setCurrencyValue: Set the currencyValue from input.
  const [currencyValue, setCurrencyValue] = useState(0);

  const search = async () => {
    setSearching(true);

    setError(false);
    try {
      const result = await axios.get(
        `https://restcountries.eu/rest/v2/name/${searchInput}`
      );
      setCountry(result.data[0]);

      //Set the Currency key from the country we search for e.x (Denmark will have key "DK")
      setCurrencyKey(result.data[0].currencies[0].code);
    } catch (error) {
      setError(true);
    }
    setSearching(false);
  };

  const convertHandler = e => {
    e.preventDefault();
    //check that our fromCurrency (SEK) is not the same as the value we want to convert to
    if (fromCurrency !== currencyKey) {
      axios
        .get(
          //fromCurrency (SEK), currencyKey (what we search for)
          `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${currencyKey}`
        )
        .then(response => {
          //currencyValue: the value from our input
          //currencyKey Key from the country we search for
          const result = currencyValue * response.data.rates[currencyKey];

          //Result: Set the update value for Result
          setResult(result.toFixed(5));
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

  const handleInputChange = e => {
    setSearchInput(e.target.value);
  };

  const handleCurrencyValue = e => {
    setCurrencyValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    search();
  };

  const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
  };

  return (
    <div className="App">
      <section style={sectionStyle}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Header />
          <Loading />
          <CountrySearch
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            searchInput={searchInput}
          />
          {searching && <Loading />}
          {error && (
            <div style={{ color: `red` }}>
              <h1>There is no country such as {searchInput}</h1>
            </div>
          )}
          {country && <Country country={country} />}
          {country && (
            <Converter
              convertCurrnecy={convertHandler}
              convertInputChange={handleCurrencyValue}
            >
              {result && (
                <p>
                  {result} {currencyKey}
                </p>
              )}
            </Converter>
          )}
        </Container>
      </section>
    </div>
  );
};

export default App;

const express = require("express");
const fetch = require("node-fetch");
const app = express();

const config = require("./config");
const PORT = config.port;

const STATUS_SUCCESS = 200;
const STATUS_ERROR = 422;

const TODAY_VAL = "https://api.coindesk.com/v1/bpi/currentprice.json";
const YESTERDAY_VAL =
  "https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday";

app.get("/compare", (req, res) => {
    console.log(json.bpi.map(price => price))
  const yesterdayPrice = fetch(YESTERDAY_VAL)
    .then(value => value.json())
    .then(json.bpi.map(price => price))
    .catch(error => res.status(STATUS_ERROR).json('error resolving data', error));

    const todayPrice = fetch(TODAY_VAL)
    .then(value => value.json())
    .then(price => json.bpi.USD.rate_float)
    .catch(error => res.status(STATUS_ERROR).json('error resolving data', error));

});

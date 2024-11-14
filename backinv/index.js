var express = require('express')
var cors = require('cors')
const axios = require('axios');
const { JSDOM } = require('jsdom');
var app = express()

const __URL = 'https://www.investing.com/currencies/usd-rub-chart'
const PORT = 3000

app.use(cors())

app.get('/', async (req, res) => {
  const response = await axios.get(__URL)

  const dom = new JSDOM(response.data);
  const document = dom.window.document;
  
  const currencyValue = document.querySelector('[data-test="instrument-price-last"]').textContent;
  console.log('$ = ' + currencyValue);
  res.json(currencyValue)
  
})

app.listen(PORT, () => {
  console.log('3000...');
});
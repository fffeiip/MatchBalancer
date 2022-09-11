const eurekaHelper = require('./eureka-helper');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, function() {
    console.log(`Running on port ${PORT}`);
});

eurekaHelper.registerWithEureka('aragorn', PORT)
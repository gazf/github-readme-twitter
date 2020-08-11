'use strict'
// use local develop
const express = require('express');
const app = express();
const api = require('../api/index.js');
const port = 9000;

app.get('/api', api);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

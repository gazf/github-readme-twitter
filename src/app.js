'use strict';

const express = require('express');
const app = express();
const api = require('../api');

app.get('/api', api);

module.exports = app;

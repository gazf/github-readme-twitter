'use strict';

import express from 'express'
import api from '../api/index.js'

const app = express();
app.get('/api', api);

export default app;

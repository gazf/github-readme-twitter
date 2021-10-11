'use strict'

import app from './app.js'
const port = 9000;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

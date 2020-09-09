'use strict'
// use local develop
const app = require('./app');
const port = 9000;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

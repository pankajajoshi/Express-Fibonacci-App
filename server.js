const express = require('express');
const app = express();
const port = 3000;

const fibonacciRouter = require('./fibonacci');

app.use('/fibonacci', fibonacciRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const { urlencoded } = require('express');
const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

function logger(req, res, next) {
  console.log(new Date(), ' ', req.url, ' ', req.method);
  next();
}

function run() {
  app.use(logger);

  app.use(express.json());
  app.use(urlencoded({ extended: true }));

  app.use(routes);

  app.listen(port, () => {
    console.log(`Running on http://localhost::${port}`);
  });
}

run();

'use strict';

require('dotenv').config();
const express = require('express');

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

const validator = require('./middleware/validator.js');
const jediRouter = require('./routes/jedi');
const sithRouter = require('./routes/sith');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());
app.use(logger);
app.use(jediRouter);
app.use(sithRouter);


app.get('/', (req, res, next) => {
  res.status(200).send('Hello New World');
});

app.get('/person', validator);

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };

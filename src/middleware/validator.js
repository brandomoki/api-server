'use strict';

// const serverError = require('../error-handlers/500.js');

const validator = (req, res, next) => {
  let { name } = req.body;
  if(name) {
    //   res.status(200).send({
    //     name: name,
    next();

  } else {
    next('name req');
  }

};

module.exports = validator;

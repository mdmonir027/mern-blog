const { validationResult } = require('express-validator');
const errorValidationFormatter = require('./errorValidationFormatter');

const responses = {};

responses.internalServerError = (res, error) => {
  console.log(error); // todo remove on production
  res.status(500).json({
    error: 'Internal Server Error',
  });
};

responses.validationResultResponse = (req, res, next) => {
  const errors = validationResult(req).formatWith(errorValidationFormatter);

  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json(errors.mapped());
};

module.exports = responses;

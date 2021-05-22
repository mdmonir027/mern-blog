const express = require('express');
const morgan = require('morgan');

const middlewareArray = [
  express.urlencoded({ extended: false }),
  express.json(),
  morgan('dev'),
];

module.exports = (app) => {
  middlewareArray.forEach((middleware) => {
    app.use(middleware);
  });
};

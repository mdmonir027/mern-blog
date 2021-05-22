const express = require('express');

const middlewareArray = [
  express.urlencoded({ extended: false }),
  express.json(),
];

module.exports = (app) => {
  middlewareArray.forEach((middleware) => {
    app.use(middleware);
  });
};

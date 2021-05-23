const express = require('express');
const morgan = require('morgan');
const passport = require('passport');

const middlewareArray = [
  express.urlencoded({ extended: false }),
  express.json(),
  morgan('dev'),
];

module.exports = (app) => {
  middlewareArray.forEach((middleware) => {
    app.use(middleware);
  });

  app.use(passport.initialize());
  app.use(passport.session());
  require('./passport/passport')(passport);
};

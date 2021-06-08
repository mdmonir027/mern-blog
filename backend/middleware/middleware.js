const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');

const middlewareArray = [
  express.urlencoded({ extended: false }),
  express.json(),
  morgan('dev'),
  cors({
    origin: 'http://localhost:3000',
  }),
  express.static('public'),
];

module.exports = (app) => {
  middlewareArray.forEach((middleware) => {
    app.use(middleware);
  });

  app.use(passport.initialize());
  app.use(passport.session());
  require('./passport/passport')(passport);
};

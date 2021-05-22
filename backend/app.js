// dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const setRoutes = require('./routes/routes');
const setMiddleware = require('./middleware/middleware');

// app scaffolding
const app = express();

// middleware
setMiddleware(app);
// routes
setRoutes(app);

const PORT = process.env.PORT || 9000;
const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });

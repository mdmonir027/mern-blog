const responses = {};

responses.internalServerError = (res, error) => {
  console.log(error); // todo remove on production
  res.status(500).json({
    error: 'Internal Server Error',
  });
};

module.exports = responses;

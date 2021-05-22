const controller = {};

controller.index = (req, res) => {
  res.status(200).json({
    message: 'User found',
  });
};

module.exports = controller;

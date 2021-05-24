const { internalServerError } = require('../../utils/errorResponses');
const User = require('../../models/User');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.show = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.remove = async (req, res) => {
  try {
    const { userId } = req.params;

    await User.findByIdAndDelete(userId);

    res.status(200).json({
      message: 'User deleted!',
    });
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

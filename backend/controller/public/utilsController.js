const controller = {};
const User = require('../../models/User');
const { internalServerError } = require('../../utils/errorResponses');

controller.getAllUser = async (req, res) => {
  try {
    const users = await User.find().select('username email profilePic');

    return res.status(200).json(users);
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

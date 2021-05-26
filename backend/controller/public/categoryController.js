const Category = require('../../models/Category');
const { internalServerError } = require('../../utils/errorResponses');
const controller = {};

controller.getAllCategory = async (req, res) => {
  //   console.log('get all category');
  //   return res.status(200).json({ message: 'Ok' });
  try {
    const categories = await Category.find({ status: 1 })
      .populate({
        path: 'posts',
        select: 'title slug',
      })
      .populate({
        path: 'user',
        select: 'username',
      });

    return res.status(200).json(categories);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.getSingleCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug })
      .populate({
        path: 'posts',
        select: 'title slug',
      })
      .populate({
        path: 'user',
        select: 'username',
      });

    return res.status(200).json(category);
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

const { internalServerError } = require('../../utils/errorResponses');
const Category = require('../../models/Category');
const slugify = require('slugify');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.store = async (req, res) => {
  try {
    const { name, slug } = req.body;

    const categoryInstance = new Category({
      name,
      slug,
      user: req.user._id,
      posts: [],
    });

    const categoryCrated = await categoryInstance.save();

    return res.status(201).json(categoryCrated);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.show = async (req, res) => {
  const { slug } = req.params;
  try {
    const category = await Category.findOne({ slug });
    return res.status(200).json(category);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.update = async (req, res) => {
  try {
    const { name } = req.body;
    const { slug } = req.params;

    const categoryUpdated = await Category.findOneAndUpdate(
      { slug },
      {
        $set: { name, slug: slugify(name).toLowerCase() },
      },
      { new: true }
    );

    return res.status(201).json(categoryUpdated);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.remove = async (req, res) => {
  try {
    const { slug } = req.params;
    await Category.findOneAndDelete({ slug });
    return res.status(204).json({
      message: 'Category Deleted Successfully',
    });
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

const { body } = require('express-validator');
const slugify = require('slugify');
const Category = require('../models/Category');
const validation = {};

validation.categoryStoreValidation = [
  body('name')
    .not()
    .isEmpty()
    .withMessage('Please provide a category name')
    .custom(async (name, { req }) => {
      const slug = slugify(name);
      const category = await Category.findOne({ slug });
      if (category) {
        return Promise.reject('Category name is already taken!');
      }
      req.body.slug = slug.toLowerCase();
    }),
];
validation.categoryUpdateValidation = [
  body('name')
    .not()
    .isEmpty()
    .withMessage('Please provide a category name')
    .custom(async (name, { req }) => {
      const slug = slugify(name).toLowerCase();
      const category = await Category.findOne({ slug: req.params.slug });
      if (category && category.slug === slug) {
        return Promise.reject('Category name is already taken!');
      }
    }),
];

module.exports = validation;

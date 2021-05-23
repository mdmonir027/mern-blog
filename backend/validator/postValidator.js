const { body } = require('express-validator');
const Post = require('../models/Post');
const Category = require('../models/Category');
const slugify = require('slugify');
const cheerio = require('cheerio');

const validation = {};

validation.postStoreValidator = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Please provide a title')
    .custom(async (title) => {
      const slug = slugify(title);
      const post = await Post.findOne({ slug });
      if (post) {
        throw new Error('Title already taken!');
      }
      return true;
    }),
  body('body')
    .not()
    .isEmpty()
    .withMessage('Please provide a body')
    .custom((body) => {
      const cheerioLoad = cheerio.load(body);
      const text = cheerioLoad.text();

      if (text.length > 5000) {
        throw new Error('Body length cannot be greater than 5000 chars');
      }
      return true;
    }),
  body('category')
    .not()
    .isEmpty()
    .withMessage('Please select a category')
    .custom(async (categorySlug, { req }) => {
      const category = await Category.findOne({ slug: categorySlug });
      if (!category) {
        throw new Error('Please select a valid category');
      }
      req.body.category = category._id;
    }),
];

validation.postUpdateValidator = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Please provide a title')
    .custom(async (title) => {
      const slug = slugify(title);
      const post = await Post.findOne({ slug });
      if (post && post.slug !== slug0) {
        throw new Error('Title already taken!');
      }
      return true;
    }),
  body('body')
    .not()
    .isEmpty()
    .withMessage('Please provide a body')
    .custom((body) => {
      const cheerioLoad = cheerio.load(body);
      const text = cheerioLoad.text();

      if (text.length > 5000) {
        throw new Error('Body length cannot be greater than 5000 chars');
      }
      return true;
    }),
  body('category')
    .not()
    .isEmpty()
    .withMessage('Please select a category')
    .custom(async (categorySlug, { req }) => {
      const category = await Category.findOne({ slug: categorySlug });
      if (!category) {
        throw new Error('Please select a valid category');
      }
      req.body.category = category._id;
    }),
];

module.exports = validation;

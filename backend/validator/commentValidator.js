const { body } = require('express-validator');
const Post = require('../models/Post');

module.exports = [
  body('body')
    .not()
    .isEmpty()
    .withMessage('Please enter a comment body')
    .isLength({ max: 200 })
    .withMessage('Comment body must not be greater than 200 chars')
    .custom(async (body, { req }) => {
      const slug = req.params.postSlug;
      const post = await Post.findOne({ slug });
      console.log(post);
      if (!post) {
        return Promise.reject('Invalid post slug');
      }
      req.body.post = post._id;
    }),
];

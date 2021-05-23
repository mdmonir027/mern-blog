const { validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const Post = require('../../models/Post');
const { internalServerError } = require('../../utils/errorResponses');
const errorValidationFormatter = require('../../utils/errorValidationFormatter');
const slugify = require('slugify');
const readingTime = require('reading-time');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const { _id } = req.user;

    const posts = await Post.find({ user: _id });

    return res.status(200).json(posts);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.store = async (req, res) => {
  const errors = validationResult(req).formatWith(errorValidationFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.mapped());
  }

  try {
    const { title, body, category } = req.body;

    const postInstance = new Post({
      title,
      slug: slugify(title),
      body,
      category,
      readTime: readingTime(body).text,
      user: req.user._id,
      likes: [],
      comments: [],
    });

    const postCreated = await postInstance.save();

    return res.status(201).json(postCreated);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.show = async (req, res) => {
  try {
    const { slug } = req.params;
    const { _id } = req.user;

    const post = await Post.findOne({ slug, user: _id });

    return res.status(200).json(post);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.update = async (req, res) => {
  try {
    const { slug } = req.params;
    const { _id } = req.user;

    const postFound = await Post.findOne({ slug, user: _id });
    if (!postFound) {
      return res.status(400).json({
        error: 'Post not found',
      });
    }

    const { title, body, category } = req.body;

    const postObject = new Post({
      title,
      slug: slugify(title),
      body,
      category,
      readTime: readingTime(body).text,
      user: req.user._id,
      likes: [],
      comments: [],
    });

    const updatedPost = await Post.findOneAndUpdate(
      { slug },
      {
        $set: postObject,
      },
      { new: true }
    );

    return res.status(202).json(updatedPost);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.remove = async (req, res) => {
  try {
    const { slug } = req.params;
    const { _id } = req.user;
    const post = await Post.findOneAndDelete({ slug, user: _id });

    res.status(200).json(post);
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

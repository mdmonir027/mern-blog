const { validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const Post = require('../../models/Post');
const { internalServerError } = require('../../utils/errorResponses');
const errorValidationFormatter = require('../../utils/errorValidationFormatter');
const slugify = require('slugify');
const readingTime = require('reading-time');
const Category = require('../../models/Category');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const { _id } = req.user;

    const posts = await Post.find({ user: _id })
      .populate({
        path: 'user',
        select: 'username',
      })
      .populate({
        path: 'category',
        select: 'name',
      });

    return res.status(200).json(posts);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.store = async (req, res) => {
  try {
    const { title, body, categoryId } = req.body;

    const postInstance = new Post({
      title,
      slug: slugify(title).toLowerCase(),
      body,
      category: categoryId,
      readTime: readingTime(body).text,
      user: req.user._id,
      likes: [],
      comments: [],
    });

    const postCreated = await postInstance.save();

    await Category.findByIdAndUpdate(categoryId, {
      $push: { posts: postCreated._id },
    });

    await Profile.findOneAndUpdate(
      { user: req.user._id },
      {
        $push: { posts: postCreated._id },
      }
    );

    const postRes = await Post.findById(postCreated._id)
      .populate({
        path: 'user',
        select: 'username',
      })
      .populate({
        path: 'category',
        select: 'name',
      });

    return res.status(201).json(postRes);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.show = async (req, res) => {
  try {
    const { slug } = req.params;
    const { _id } = req.user;

    const post = await Post.findOne({ slug, user: _id })
      .populate({
        path: 'user',
        select: 'username',
      })
      .populate({
        path: 'category',
        select: 'name slug',
      });

    return res.status(200).json(post);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.update = async (req, res) => {
  try {
    const { slug } = req.params;

    const postFound = await Post.findOne({ slug, user: req.user._id });
    if (!postFound) {
      return res.status(400).json({
        error: 'Post not found',
      });
    }

    const { title, body, categoryId } = req.body;

    const postObject = {
      title,
      slug: slugify(title).toLowerCase(),
      body,
      category: categoryId,
      readTime: readingTime(body).text,
    };

    const postFind = await Post.findOne({ slug, user: req.user._id });

    const updatedPost = await Post.findOneAndUpdate(
      { slug, user: req.user._id },
      {
        $set: postObject,
      },
      { new: true }
    );

    if (postFind.category !== categoryId) {
      await Category.findByIdAndUpdate(postFind.category, {
        $pull: { post: postFind._id },
      });
      await Category.findByIdAndUpdate(categoryId, {
        $push: { post: updatedPost._id },
      });
    }

    return res.status(202).json(updatedPost);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.remove = async (req, res) => {
  try {
    const { slug } = req.params;
    const { _id } = req.user;
    const post = await Post.findOne({ slug, user: _id });
    await Post.findOneAndDelete({ slug, user: _id });

    await Profile.findOneAndUpdate(
      { user: _id },
      {
        $pull: { posts: post._id },
      }
    );
    await Category.findByIdAndUpdate(post.category, {
      $pull: { posts: post._id },
    });

    res.status(200).json();
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

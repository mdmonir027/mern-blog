const { internalServerError } = require('../../utils/errorResponses');
const Post = require('../../models/Post');

const controller = {};

controller.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate({
        path: 'user',
        select: 'username',
      })
      .populate({
        path: 'category',
        select: 'name slug',
      });

    return res.status(200).json(posts);
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.getSinglePost = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await Post.findOne({ slug })
      .populate({
        path: 'user',
        select: 'username',
      })
      .populate({
        path: 'category',
        select: 'name slug',
      })
      .populate({
        path: 'likes',
        select: 'username',
      });

    return res.status(200).json(post);
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

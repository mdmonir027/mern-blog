const controller = {};
const User = require('../../models/User');
const { internalServerError } = require('../../utils/errorResponses');
const Comment = require('../../models/Comment');
const Post = require('../../models/Post');

controller.getAllUser = async (req, res) => {
  try {
    const users = await User.find().select('username email profilePic');

    return res.status(200).json(users);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.getAllComments = async (req, res) => {
  try {
    const { postSlug } = req.params;

    const post = await Post.findOne({ slug: postSlug });

    const comments = await Comment.find({ post: post._id }).populate({
      path: 'user',
      select: 'username profilePic',
    });

    return res.status(200).json(comments);
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

const Comment = require('../../models/Comment');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const { internalServerError } = require('../../utils/errorResponses');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const { postSlug } = req.params;

    const comments = await Comment.find({ post: post(postSlug)._id });
    res.status(200).json(comments);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.store = async (req, res) => {
  try {
    const { postSlug } = req.params;
    const userId = req.user._id;
    const { body, post } = req.body;

    console.log(req.body);

    const commentInstance = new Comment({
      body,
      user: userId,
      post,
      likes: [],
      replies: [],
    });

    const createdComment = await commentInstance.save();

    await Profile.findOneAndUpdate(
      { user: req.user._id },
      {
        $push: { comments: createdComment._id },
      }
    );

    await Post.findOneAndUpdate(
      { slug: postSlug },
      {
        $push: { comments: createdComment._id },
      }
    );

    res.status(201).json(createdComment);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.show = async (req, res) => {
  try {
    const { commentId } = req.params;

    const foundedComment = await Comment.findById(commentId);

    res.status(200).json(foundedComment);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.update = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { body } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      {
        $set: { body },
      },
      { new: true }
    );

    return res.status(200).json(updatedComment);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.remove = async (req, res) => {
  try {
    const { commentId, postSlug } = req.params;

    const commentFind = await Comment.findById(commentId);
    await Comment.findByIdAndRemove(commentId);

    await Profile.findOneAndUpdate(
      { user: req.user._id },
      {
        $pull: { comments: commentFind._id },
      }
    );
    await Post.findOneAndUpdate(
      { slug: postSlug },
      {
        $pull: { comments: commentFind._id },
      }
    );

    return res.status(204).json();
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

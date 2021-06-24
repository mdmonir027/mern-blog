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

    const comment = await Comment.findById(createdComment._id).populate({
      path: 'user',
      select: 'username profilePic',
    });

    res.status(201).json(comment);
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

    const comment = await Comment.findById(commentId)
      .populate({
        path: 'user',
        select: 'username profilePic',
      })
      .populate({
        path: 'replies',
        select: 'body createdAt likes comment',
        populate: {
          path: 'user',
          model: 'User',
          select: 'username profilePic',
        },
      });

    return res.status(200).json(comment);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.remove = async (req, res) => {
  try {
    const { commentId, postSlug } = req.params;

    await Comment.findByIdAndRemove(commentId);

    await Profile.findOneAndUpdate(
      { user: req.user._id },
      {
        $pull: { comments: commentId },
      }
    );
    await Post.findOneAndUpdate(
      { slug: postSlug },
      {
        $pull: { comments: commentId },
      }
    );

    return res.status(204).json();
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;

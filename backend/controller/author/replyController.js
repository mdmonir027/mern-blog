const Reply = require('../../models/Reply');
const Comment = require('../../models/Comment');
const { internalServerError } = require('../../utils/errorResponses');

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const { commentId } = req.params;

    const replies = await Reply.find({ comment: commentId });

    if (replies.length < 0) {
      return res.status(200).json([]);
    }

    return res.status(200).json(replies);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.store = async (req, res) => {
  try {
    const { body } = req.body;
    const { commentId } = req.params;
    const userId = req.user._id;

    const replyInstance = new Reply({
      body,
      user: userId,
      comment: commentId,
      likes: [],
    });

    const replyCreated = await replyInstance.save();

    await Comment.findByIdAndUpdate(commentId, {
      $push: { replies: replyCreated._id },
    });

    const replyToResponse = await Reply.findById(replyCreated._id).populate({
      path: 'user',
      select: 'username profilePic',
    });

    res.status(201).json(replyToResponse);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.update = async (req, res) => {
  try {
    const { body } = req.body;
    const userId = req.user._id;

    const { replyId } = req.params;

    const replyUpdated = await Reply.findOneAndUpdate(
      { user: userId, _id: replyId },
      {
        $set: { body },
      },
      { new: true }
    );

    res.status(200).json(replyUpdated);
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.remove = async (req, res) => {
  try {
    const userId = req.user._id;

    const { replyId, commentId } = req.params;

    const findReply = await Reply.findOne({ user: userId, _id: replyId });

    await Reply.findOneAndDelete({ user: userId, _id: replyId });

    await Comment.findByIdAndUpdate(commentId, {
      $pull: { replies: findReply._id },
    });
    res.status(200).json({
      message: 'Reply deleted successfully',
    });
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;
